import { useSearchParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const courseTitle = searchParams.get("course") || "Курс программирования";
  const coursePrice = searchParams.get("price") || "29,900";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Спасибо за покупку курса "${courseTitle}"! Мы отправили инструкции на вашу почту.`,
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Оформление{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  покупки
                </span>
              </h1>
              <p className="text-gray-600">
                Заполните данные для покупки курса
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 bg-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Данные для оплаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Имя
                          </label>
                          <Input placeholder="Ваше имя" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Фамилия
                          </label>
                          <Input placeholder="Ваша фамилия" required />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Телефон
                        </label>
                        <Input
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          required
                        />
                      </div>

                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Данные карты
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Номер карты
                            </label>
                            <Input placeholder="1234 5678 9012 3456" required />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Срок действия
                              </label>
                              <Input placeholder="MM/YY" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVV
                              </label>
                              <Input placeholder="123" required />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg py-3"
                      >
                        <Icon name="CreditCard" size={20} className="mr-2" />
                        Оплатить {coursePrice} руб
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="border-0 bg-white shadow-xl sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Ваш заказ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <Icon name="Code" size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {courseTitle}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 text-purple-700"
                          >
                            Онлайн курс
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Стоимость курса:</span>
                        <span>{coursePrice} руб</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Скидка:</span>
                        <span className="text-green-600">-0 руб</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                        <span>Итого:</span>
                        <span>{coursePrice} руб</span>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-purple-700 mb-2">
                        <Icon name="Shield" size={16} />
                        <span className="font-semibold">Гарантия качества</span>
                      </div>
                      <p className="text-sm text-purple-600">
                        30 дней гарантии возврата средств
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentPage;
