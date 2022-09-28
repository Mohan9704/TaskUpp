import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";
import TaskBoard from "../components/TaskBoard";
import { PlusSmIcon } from "@heroicons/react/solid";
import NewBoard from "../components/NewBoard";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { NewDate } from "../utils";
import Head from "next/head";
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile } from "../src/models";

// const BOARDS = [
//   {
//     id: uuid(),
//     boardTitle: "To Do",
//     cards: [
//       {
//         id: uuid(),
//         title: "Complete the Hackathon Project before 30th September.",
//         tasks: [
//           { id: uuid(), title: "Your Task", completed: false },
          
//         ],
//         labels: [
//           { id: uuid(), text: "Label", color: "#b82ed6" }
//         ],
//         description: "This is Description 1.",
//         date: "",
//       },
      
//     ],
//   },
// ];

const Dashboard = () => {
  const router = useRouter();

  const [boards, setBoards] = useState([]);

  const [user, setUser] = useState("");
  const [userInfo,setUserInfo]= useState("");
  const [userAuthData, setUserAuthData] = useState("");
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [showEditableBoard, setShowEditableBoard] = useState(false);


  useEffect(() => {
    const userAuth = async () => {
      const user = await Auth.currentAuthenticatedUser();
      //   const data = await Auth.getUserData();
      const { username, attributes } = user;
      // console.log(username);
      //   console.log(data);
      setUser(username);
      setUserAuthData(attributes);

      const data = await DataStore.query(UserProfile, (c) =>
        c.username("eq", username)
      );
      console.log("User retrieved successfully!", data[0]);
      setUserInfo(data[0]);
    };

    userAuth();
  }, []);

    


  /// ADD BOARD AND DELETE BOARD

  const handleNewBoardTitle = (e) => {
    setNewBoardTitle(e.target.value);
  };

  const handleAddBoard = (boardTitle) => {
    console.log("Board Added", boardTitle);

    setBoards([
      ...boards,
      {
        id: uuid(),
        boardTitle: boardTitle,
        cards: [],
      },
    ]);

    setShowEditableBoard(!showEditableBoard);
    setNewBoardTitle("");
  };

  const handleRemoveBoard = (boardId) => {
    console.log("Board Removed !!");

    const tempBoards = boards.filter((item) => item.id !== boardId);

    setBoards(tempBoards);
  };

  const handleShowEditableBoard = () => {
    setShowEditableBoard(!showEditableBoard);
  };

  /// ADD CARD , UPADTE CARD AND DELETE CARD

  const handleAddTaskCard = (
    title,
    description,
    boardId,
    setTaskTitle,
    setShowEditableTask
  ) => {
    console.log("Task Card Added", title);

    const card = {
      id: uuid(),
      title: title,
      labels: [],
      tasks: [],
      description: description,
      date:new Date().toISOString().substring(0,10),
    };

    const boardIndex = boards.findIndex((item) => item.id === boardId);

    if (boardIndex < 0) {
      return;
    }

    const tempBoards = [...boards];

    tempBoards[boardIndex].cards.push(card);

    setBoards(tempBoards);
    setShowEditableTask(false);
    setTaskTitle("");
  };

  const handleUpdateTaskCard = (
    boardId,
    cardId,
    updatedCard,
    handleShowModal
  ) => {
    console.log("Task Card Updated");

    const boardIndex = boards.findIndex((item) => item.id === boardId);

    if (boardIndex < 0) {
      return;
    }

    const cardIndex = boards[boardIndex]?.cards.findIndex(
      (item) => item.id === cardId
    );

    if (cardIndex < 0) {
      return;
    }

    const tempBoards = [...boards];
    tempBoards[boardIndex].cards[cardIndex] = updatedCard;

    console.log(updatedCard);

    setBoards(tempBoards);
    handleShowModal();
  };

  const handleRemoveTaskCard = (cardId, boardId) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) {
      return;
    }

    const cardIndex = boards[boardIndex].cards.findIndex(
      (item) => item.id === cardId
    );
    if (cardIndex < 0) {
      return;
    }

    const tempBoards = [...boards];

    tempBoards[boardIndex].cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  /// ADDING DRAGGABLE CARD FUNCTIONALITY

  const onDragEnd = (result, boards, setBoards) => {
    if (!result.destination) return;

    const { source, destination } = result;

    let source_BoardIndex, target_BoardIndex;

    source_BoardIndex = boards?.findIndex(
      (item) => item.id === source.droppableId
    );

    if (source_BoardIndex < 0) {
      return;
    }

    target_BoardIndex = boards?.findIndex(
      (item) => item.id === destination.droppableId
    );

    if (target_BoardIndex < 0) {
      return;
    }

    const tempBoards = [...boards];
    const tempCard = tempBoards[source_BoardIndex]?.cards[source.index];

    tempBoards[source_BoardIndex].cards.splice(source.index, 1);

    tempBoards[target_BoardIndex].cards.splice(destination.index, 0, tempCard);

    setBoards(tempBoards);
  };

  /// USER AUTHENTICATION AND USER lOGOUT

  

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Dashboard - TaskUpp</title>
        <link rel="icon" href="/taskupp-logo.png" />
      </Head>
      {userAuthData.email_verified && (
        
        <>
          <div className="flex  flex-col lg:grid lg:grid-cols-12  ">
            <div className=" h-screen sticky top-0 flex-col lg:col-span-2 ">
              <DashboardNav username={user} handleLogout={handleLogout} />
            </div>
            <div className=" h-full lg:col-span-10 flex flex-col space-y-2 py-3 px-3  transition duration-300 ease-in bg-gray-100 dark:bg-gray-900 ">
              <DashboardHeader username={user} imageUrl={userInfo.imageUrl}   />

              
              <DragDropContext
                onDragEnd={(result) => onDragEnd(result, boards, setBoards)}
              >
                <div className=" flex z-10 overflow-x-auto custom-scroll space-x-4 h-[648px] w-full  bg-gray-200 py-2 px-3 dark:bg-gray-800/50 border-2 border-dashed border-gray-800 dark:border-gray-100    rounded-lg transition duration-300 ease-in">
                  {boards?.map((board) => (
                    <TaskBoard
                      key={board.id}
                      droppableId={board.id}
                      type="TASK"
                      boardId={board.id}
                      boardTitle={board.boardTitle}
                      cards={board.cards}
                      handleRemoveBoard={handleRemoveBoard}
                      handleAddTaskCard={handleAddTaskCard}
                      handleRemoveTaskCard={handleRemoveTaskCard}
                      handleUpdateTaskCard={handleUpdateTaskCard}
                    />
                  ))}
                  <div className="flex flex-col h-full min-w-[294px] rounded-lg px-2 py-[6px]  border-gray-800 dark:border-gray-100 ">
                    {showEditableBoard ? (
                      <NewBoard
                        newBoardTitle={newBoardTitle}
                        handleNewBoardTitle={handleNewBoardTitle}
                        handleAddBoard={handleAddBoard}
                        onClose={handleShowEditableBoard}
                      />
                    ) : (
                      <div
                        onClick={handleShowEditableBoard}
                        className="flex items-center justify-center space-x-4  bg-gray-50 dark:bg-gray-100/10 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in"
                      >
                        <p className="text-lg text-gray-800 font-inter font-semibold dark:text-gray-100">
                          Add New Board
                        </p>
                        <div className="bg-violet-200 rounded-md dark:bg-violet-600 flex items-center justify-center ">
                          <PlusSmIcon className=" w-6 h-6  text-violet-500 dark:text-violet-200 " />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </DragDropContext>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
