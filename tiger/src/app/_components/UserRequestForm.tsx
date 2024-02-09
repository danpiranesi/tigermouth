"use client";
//TODO cust this - use reacthookform for functionality

import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddMessageRequest, createAssistant } from "../client/api";
import { ArrowUpIcon } from "@radix-ui/react-icons";


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
    formState: { errors: errors, isValid: isValid },
  } = useForm();

  const onSubmit = async (data: any) => {
    // updateChat("user", data.userChatInput);

    // threadId
    //   ? sendChatMessage({ input: data.userChatInput, threadId })
    //   : initializeThread(data.userChatInput);

    createAssistant("tigerV1", "gpt-4", "tiger")

      reset({ userChatInput: "" });
  };

  return (
    <Form.Root
      className="p-3 rounded-md w-3/4 fixed bottom-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-2">
        <Input
          placeholder="Talk to TigerMouth"
          register={register}
          inputId="userChatInput"
          error={errors.userChatInput?.message}
          className="p-2 rounded-lg" 
          containerClassName="flex flex-col w-full text-md shadow-md rounded-lg overflow-hidden"
        />
        <Form.Submit asChild>
          <Button type="primary" className="h-full shadow-md" >
            <ArrowUpIcon className="w-6 h-6" />
          </Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default UserRequestForm;
