import React from "react";
import { useState } from "react";
import { BackButton } from "../componens/BackButton";
import { Spinner } from "../componens/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`https://book-store-backend-sand.vercel.app/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("you have an error. check consol");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto ">
        <h3>Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white w-full m-8"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
