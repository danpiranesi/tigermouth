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
    reset,
    watch,
    formState: { errors: errors, isValid: isValid },
  } = useForm();

  const onSubmit = async (data: any) => {
    updateChat("user", data.userChatInput);

    threadId
      ? sendChatMessage({ input: data.userChatInput, threadId })
      : initializeThread(data.userChatInput);

      reset({ userChatInput: "" });
  };

  return (
    <Form.Root
      className="p-3 rounded-md w-3/4 fixed bottom-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center">
        <Input
          placeholder="Talk to TigerMouth"
          register={register}
          inputId="userChatInput"
          error={errors.userChatInput?.message}
          className="flex flex-col w-full text-md p-2 -mr-9"
        />
        <Form.Submit asChild>
          <Button type="primary">↑</Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default UserRequestForm;
