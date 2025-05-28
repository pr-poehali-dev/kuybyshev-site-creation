import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const historicalEvents = [
    { year: "1586", event: "Основание Самары как крепости" },
    { year: "1935", event: "Переименование в Куйбышев" },
    { year: "1941-1943", event: "Запасная столица СССР" },
    { year: "1991", event: "Возвращение названия Самара" },
  ];

  const landmarks = [
    {
      name: "Бункер Сталина",
      description: "Секретный объект времён ВОВ",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      name: "Площадь Куйбышева",
      description: "Одна из крупнейших площадей Европы",
      image:
        "https://images.unsplash.com/photo-1567271894927-ed85a8f9c1b1?w=400&h=300&fit=crop",
    },
    {
      name: "Жигулёвские горы",
      description: "Природная жемчужина Поволжья",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
  ];

  const notablePersons = [
    {
      name: "Валериан Куйбышев",
      role: "Революционер, в честь которого назван город",
    },
    { name: "Дмитрий Козлов", role: "Конструктор космических аппаратов" },
    { name: "Алексей Толстой", role: "Писатель, жил в Самаре" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 font-cormorant">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 dark:from-blue-900 dark:to-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Куйбышев
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Город-легенда на берегах Волги
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed opacity-80 animate-fade-in">
            С 1935 по 1991 год Самара носила имя Куйбышев — в честь
            революционера Валериана Куйбышева. В годы Великой Отечественной
            войны город стал запасной столицей СССР, сохранив уникальное
            историческое наследие.
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold animate-scale-in"
          >
            <Icon name="MapPin" size={20} />
            Исследовать историю
          </Button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Ключевые даты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalEvents.map((event, index) => (
              <Card
                key={index}
                className="hover-scale bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-800 font-bold">
                    {event.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">{event.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Достопримечательности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {landmarks.map((landmark, index) => (
              <Card
                key={index}
                className="hover-scale bg-white shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={landmark.image}
                    alt={landmark.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    {landmark.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {landmark.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Persons Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Выдающиеся личности
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {notablePersons.map((person, index) => (
              <Card
                key={index}
                className="hover-scale bg-gradient-to-br from-white to-slate-50 shadow-lg border-0 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-slate-800">
                    {person.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {person.role}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Куйбышев — Самара</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Историческое наследие города продолжает жить в сердцах жителей и
            памятниках архитектуры. Каждая улица хранит память о великих
            событиях прошлого.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-amber-400">
              <Icon name="Clock" size={20} />
              История
            </Button>
            <Button variant="ghost" className="text-white hover:text-amber-400">
              <Icon name="Camera" size={20} />
              Галерея
            </Button>
            <Button variant="ghost" className="text-white hover:text-amber-400">
              <Icon name="Users" size={20} />
              Люди
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
