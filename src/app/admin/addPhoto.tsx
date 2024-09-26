import React from "react";

const addPhoto = () => {
  return (
    <div>
      <form action="/profile" method="post">
        <input type="file" name="avatar" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addPhoto;
