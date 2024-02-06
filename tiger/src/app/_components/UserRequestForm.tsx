"use client";
//TODO cust this - use reacthookform for functionality

import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddMessageRequest } from "../client/api";

const UserRequestForm = ({
  sendChatMessage,
  initializeThread,
  updateChat,
  threadId,
}: {
  sendChatMessage: (message: AddMessageRequest) => void;
  initializeThread: (message: string) => void;
  updateChat: (role: string, content: string) => void;
  threadId: string;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: errors, isValid: isValid },
  } = useForm();

  const onSubmit = async (data: any) => {
    updateChat("user", data.userChatInput);

    threadId
      ? sendChatMessage({ input: data.userChatInput, threadId })
      : initializeThread(data.userChatInput);
  };

  return (
    <Form.Root
      className="flex flex-col gap-4 bottom-2 absolute z-10 bg-secondaryBg p-4 rounded-md shadow-md w-full max-w-7xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row items-center">
        <Input
          placeholder="Enter your question"
          register={register}
          inputId="userChatInput"
          error={errors.userChatInput?.message}
          className="flex flex-col w-full text-lg p-2"
        />
        <Form.Submit asChild>
          <Button type="primary">Submit</Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default UserRequestForm;
