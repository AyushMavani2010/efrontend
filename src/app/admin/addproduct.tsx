"use client";
import { ProductAddResponse } from "@/src/types/Product";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);

    if (image) {
      formData.append("image", image);
    }

    axios
      .post("http://localhost:4000/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => { 
        setName("");
        setPrice("");
        setImage(null);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddProduct;
