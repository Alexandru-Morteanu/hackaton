"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { supabase } from "../components/supa";

export default function page() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const { data, error } = await supabase.from("Gunoaie").select("*");
    console.log(data);
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (file.type === "image/png") {
        setSelectedFile(file);
      } else {
        alert("Please select a valid PNG file.");
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
}
