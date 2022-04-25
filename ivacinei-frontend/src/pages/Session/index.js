import { Input, InputWrapper, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";

const Session = () => {
  const [form, setForm] = useState({
    name: "",
    vacDate: "",
  });

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <InputWrapper
        mb={8}
        id="name"
        name="name"
        value={form.name}
        required
        label="Name"
        description="Please enter your full name"
      >
        <Input id="input-demo" />
      </InputWrapper>

      <DatePicker
        mb={8}
        placeholder="Pick up a date"
        label="Birth Date"
        required
      />

      <DatePicker
        mb={8}
        id="vacDate"
        name="vacDate"
        onChange={(value) => onChange({ target : { name: "vacDate"}})}
        value={form.vacDate}
        placeholder="Pick up a date"
        label="Select a date to schedule your vaccine"
        required
      />

      <Button mt={16}>Create</Button>
    </>
  );
};

export default Session;
