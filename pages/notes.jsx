import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import DashboardNav from "../components/DashboardNav";
import DashboardHeader from "../components/DashboardHeader";
import { PlusSmIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { NewDate, UpdateDate } from "../utils";
import NoteCard from "../components/NoteCard";
import { v4 as uuid } from "uuid";
import AddNoteModal from "../components/AddNoteModal";
import { DataStore } from "@aws-amplify/datastore";
import { UserProfile } from "../src/models";

const NOTES = [
  {
    id: uuid(),
    title: "This is a First Note",
    description: "This is a very long Desription",
    priority: "High",
    date: NewDate(),
  },
  {
    id: uuid(),
    title: "This is a Second Note",
    description: "This is a short Desription",
    priority: "Medium",
    date: NewDate(),
  },
  {
    id: uuid(),
    title: "This is a Second Note",
    description: "This is a short Desription",
    priority: "Medium",
    date: NewDate(),
  },
  {
    id: uuid(),
    title: "This is a Second Note",
    description: "This is a short Desription",
    priority: "Medium",
    date: NewDate(),
  },
];

const Notes = () => {
  const router = useRouter();

  const [notes, setNotes] = useState(NOTES);
  const [addNoteModal, setAddNoteModal] = useState(false);

  const [user, setUser] = useState("");
  const [userAuthData, setUserAuthData] = useState("");
  const [userInfo,setUserInfo] = useState("");

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

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/login");
      console.log("Signed Out Successfull!!");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const handleAddNoteModal = () => {
    setAddNoteModal(!addNoteModal);
  };

  const handleAddNewNote = (title, description, priority,date) => {
    console.log("Note Added!!");
    const newDate= UpdateDate(date);
    const newNote = {
      id: uuid(),
      title: title,
      description: description,
      priority: priority,
      date: newDate,
    };
    setNotes([...notes, newNote]);
    
    setAddNoteModal(false)
  };

  const handleDeleteNote = (noteId) => {
    console.log("Note Deleted");

    const index = notes?.findIndex((item) => item.id === noteId);

    const tempNotes = [...notes];

    tempNotes.splice(index, 1);

    setNotes(tempNotes);
  };

  return (
    <div>
      <Head>
        <title>Notes - TaskUpp</title>
        <link rel="icon" href="/taskupp-logo.png" />
      </Head>
      {userAuthData.email_verified && (
        <>
          <div className="flex flex-col lg:grid lg:grid-cols-12  ">
            <div className=" h-screen sticky top-0 flex-col lg:col-span-2 ">
              <DashboardNav username={user} handleLogout={handleLogout} />
            </div>
            <div className=" h-full lg:col-span-10 flex  flex-col space-y-2 py-3 px-3  transition duration-300 ease-in bg-gray-100 dark:bg-gray-900 ">
              <DashboardHeader username={user} imageUrl={userInfo?.imageUrl}/>

              {/* <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                Welcome @{user}, your email is {userAuthData.email}.
              </h1> */}
              <div className=" flex flex-col  z-10  h-[648px] w-full space-y-4 bg-gray-200 py-2 border-2 px-3 border-dashed border-gray-800/50 dark:border-gray-100  dark:bg-gray-700/30   rounded-lg transition duration-300 ease-in">
                <div className=" w-full h-16 flex items-center justify-between py-3 px-4 transition duration-300 ease-in">
                  <p className="text-3xl text-gray-800 font-inter font-bold dark:text-gray-100 ">
                    Notes
                  </p>
                  <div
                    onClick={handleAddNoteModal}
                    className="flex items-center space-x-4  bg-gray-50 dark:bg-gray-700 rounded-lg py-2 px-3 cursor-pointer hover:ring-2 ring-gray-500  dark:ring-gray-300 transition duration-300 ease-in"
                  >
                    <p className="text-lg text-gray-800 font-inter font-semibold dark:text-gray-100">
                      Add Note
                    </p>
                    <div className="  bg-violet-200 rounded-md dark:bg-violet-600 flex items-center justify-center ">
                      <PlusSmIcon className=" w-5 h-5 md:w-6 md:h-6 text-violet-500 dark:text-violet-200 " />
                    </div>
                  </div>
                </div>

                <div className=" grid grid-cols-4 items-center gap-4 px-4 transition duration-300 ease-in">
                  {notes.map((note) => (
                    <NoteCard
                      key={note.id}
                      noteId={note.id}
                      title={note.title}
                      description={note.description}
                      priority={note.priority}
                      date={note.date}
                      handleDeleteNote={handleDeleteNote}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {addNoteModal && (
            <AddNoteModal
              onClose={handleAddNoteModal}
              handleAddNewNote={handleAddNewNote}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Notes;
