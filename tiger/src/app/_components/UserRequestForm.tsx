"use client";
//TODO cust this - use reacthookform for functionality

import React, { useEffect } from "react";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddMessageRequest, createAssistant } from "../client/api";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const UserRequestForm = ({
  sendChatMessage,
  initializeThread,
  updateChat,
  threadId,
  isSendDisabled,
  isInputDisabled,
}: {
  sendChatMessage: (message: AddMessageRequest) => void;
  initializeThread: (message: string) => void;
  updateChat: (role: string, content: string) => void;
  threadId: string;
  isSendDisabled: boolean;
  isInputDisabled: boolean;
}) => {
  const inputValidationSchema = z.object({
    userChatInput: z
      .string()
      .refine((val) => val.trim().length > 0, {
        message: "Please enter a message",
      })
      .refine((val) => val.trim().length < 1000, {
        message: "Message must be less than 1000 characters",
      })
      .refine((val) => !isSendDisabled, {
        message: "Please wait for a response",
      })
      .refine((val) => !isInputDisabled, {
        message: "Please wait for a response",
      }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: errors, isValid: isValid },
  } = useForm({
    resolver: zodResolver(inputValidationSchema),
  });

  const onSubmit = async (data: any) => {
    updateChat("user", data.userChatInput);

    threadId
      ? sendChatMessage({ input: data.userChatInput, threadId })
      : initializeThread(data.userChatInput);

    reset({ userChatInput: "" });
  };

  return (
    <Form.Root
      className="p-3 rounded-md sm:w-3/4 w-full fixed bottom-1"
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
          <Button disabled={!isValid} type="primary" className="h-full shadow-md">
            <ArrowUpIcon className="w-6 h-6" />
          </Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default UserRequestForm;
