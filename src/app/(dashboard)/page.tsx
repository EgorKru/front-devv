import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  // В WorkTech показываем главную страницу с проектами
  // Если у пользователя нет проектов, предложим создать
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Добро пожаловать в WorkTech!</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Мои проекты</h3>
          <p className="text-gray-600 mb-4">
            Просматривайте и управляйте вашими проектами
          </p>
          <a 
            href="/projects" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Перейти к проектам
          </a>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Мои задачи</h3>
          <p className="text-gray-600 mb-4">
            Просматривайте задачи назначенные на вас
          </p>
          <a 
            href="/tasks" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Мои задачи
          </a>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Создать проект</h3>
          <p className="text-gray-600 mb-4">
            Начните новый проект для вашей команды
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Создать проект
          </button>
        </div>
      </div>
    </div>
  );
}
