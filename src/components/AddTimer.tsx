import { useRef } from "react";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { FormHandler } from "./UI/Form";
import { useTimerContext } from "./store/timer-context";

export default function AddTimer() {
    const form = useRef<FormHandler>(null);
    const {addTimer} = useTimerContext();
    function handleSaveTimer(data: unknown) {
      const extractedData = data as { name: string; duration: string };
      addTimer({name:extractedData.name,duration:+extractedData.duration});
      form.current?.clear();
    }
  
    return (
      <Form ref={form} onSave={handleSaveTimer} id="add-timer">
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Duration" id="duration" />
        <p>
          <Button>Add Timer</Button>
        </p>
      </Form>
    );
  }