import { Flex, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

export default function ContractForm({ onSubmit }) {
  const [validated, setValidated] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      termsOfService: false,
    },
    validate: {
      email: (value) => (!!value ? null : "Please Enter This Field"),
      name: (value) => (!!value ? null : "Please Enter This Field"),
    },
  });

  return (
    <form
      className="contract-form"
      onSubmit={form.onSubmit(() => {
        setValidated(true);
      })}
    >
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Nguyen Van A"
        key={form.key("name")}
        disabled={validated}
        {...form.getInputProps("name")}
      />
      <TextInput
        withAsterisk
        label="Email"
        placeholder="abc@gmail.com"
        key={form.key("email")}
        disabled={validated}
        {...form.getInputProps("email")}
      />
      <NumberInput
        label="Phone Number"
        placeholder="0000 000 000"
        key={form.key("phone")}
        rightSection={<></>}
        disabled={validated}
        {...form.getInputProps("phone")}
      />
      <Textarea
        label="Note"
        placeholder="Enter here"
        minRows={2}
        maxRows={6}
        disabled={validated}
      />
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="nowrap"
      >
        {validated ? (
          <>
            <button
              className="contract-btn"
              onClick={(e) => {
                e.preventDefault();
                setValidated((prev) => !prev);
              }}
            >
              EDIT
            </button>
            <button
              className="contract-btn"
              onClick={() => {
                onSubmit();
              }}
            >
              SUBMIT
            </button>
          </>
        ) : (
          <button type="submit" className="contract-btn">
            SUBMIT
          </button>
        )}
      </Flex>
    </form>
  );
}
