"use client";
//TODO cust this - use reacthookform for functionality

import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Input from "./Input";

const UserRequestForm = () => (
  <Form.Root className="fixed bottom-0 left-10 w-3/4 p-4 mx-auto">
    <div className="flex flex-row items-center justify-between">
      <Input
        placeholder="Talk To TigerMouth..."
        value=""
        onChange={() => {}}
        error=""
        className="flex flex-col w-3/4 mx-auto mr-2 text-center"
      />
      <Form.Submit asChild>
        <Button type="primary">Submit</Button>
      </Form.Submit>
    </div>
  </Form.Root>
);

export default UserRequestForm;
