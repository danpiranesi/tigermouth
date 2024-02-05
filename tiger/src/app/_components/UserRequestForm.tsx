"use client";
//TODO cust this - use reacthookform for functionality

import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Input from "./Input";

const UserRequestForm = () => (
  <Form.Root className="flex flex-col gap-4 w-full">
    <div className="flex flex-row">
      <Input
        placeholder="Enter your question"
        value=""
        onChange={() => {}}
        error=""
        className="flex flex-col w-full"
      />
      <Form.Submit asChild>
        <Button type="primary">Submit</Button>
      </Form.Submit>
    </div>
  </Form.Root>
);

export default UserRequestForm;
