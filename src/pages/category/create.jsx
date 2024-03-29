import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Back } from "../../assets/icons/back";
import { CreateCategory } from "../../components/create/create-category";
import { useCreateCategory } from "./service/mutation/useCreateCategory";

export const Create = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateCategory();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => navigate("/app/category"),
    });
  };
  return (
    <div>
      <Link to="/app/category">
        <Back />
      </Link>
      <CreateCategory submit={submit} />
    </div>
  );
};
