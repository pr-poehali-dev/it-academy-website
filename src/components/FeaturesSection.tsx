import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Users",
      title: "Личный ментор",
      description:
        "Персональная поддержка и ответы на вопросы от опытных разработчиков",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобное время. Доступ к материалам 24/7",
    },
    {
      icon: "Award",
      title: "Сертификат",
      description:
        "Получите признанный сертификат после успешного завершения курса",
    },
    {
      icon: "Laptop",
      title: "Практические проекты",
      description:
        "Создавайте реальные проекты для портфолио с первого дня обучения",
    },
    {
      icon: "MessageCircle",
      title: "Комьюнити",
      description:
        "Общайтесь с единомышленниками и находите команду для проектов",
    },
    {
      icon: "Briefcase",
      title: "Помощь с трудоустройством",
      description: "Подготовим резюме и поможем найти работу мечты в IT",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современный подход к обучению программированию с фокусом на практику
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
