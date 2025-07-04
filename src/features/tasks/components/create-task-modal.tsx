"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateTaskFormWrapper } from "./create-task-form-wrapper";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();

  return (
    <ResponsiveModal 
      open={isOpen} 
      onOpenChange={setIsOpen}
      title="Создать новую задачу"
      description="Заполните форму для создания новой задачи в выбранном проекте"
    >
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
