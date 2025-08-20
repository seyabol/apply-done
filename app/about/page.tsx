// app/about/page.tsx
import { AcademicCapIcon, UserGroupIcon, GlobeAltIcon, ShieldCheckIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "تخصص و تجربه",
    description: [
      "سال‌ها تجربه در کمک به دانشجویان برای گذر از فرآیند پیچیده‌ی پذیرش تحصیلی.",
      "درک عمیق از چالش‌ها و نیازهای خاص متقاضیان.",
      "کارنامه‌ای پربار در گرفتن پذیرش از دانشگاه‌های برتر دنیا."
    ],
    icon: AcademicCapIcon,
  },
  {
    name: "راهنمایی اختصاصی فردی",
    description: [
      "مشاوره‌ اختصاصی متناسب با نیازها و اهداف متقاضی.",
      "پشتیبانی جامع در طول فرآیند کامل درخواست، از نوشتن مقاله، رزومه، تماس با اساتید تا آماده‌سازی مدارک.",
      "راهنمایی اختصاصی در انتخاب کشور و دانشگاه‌های مناسب."
    ],
    icon: UserGroupIcon,
  },
  {
    name: "آشنایی کامل با دانشگاه‌ها",
    description: [
      "اطلاعات کامل از سیاست‌ها و روندهای پذیرش دانشگاه‌ها.",
      "اطلاعات به‌روز درباره‌ی آخرین تحولات در آموزش بین‌المللی.",
      "کمک به انتخاب بهترین دانشگاه‌ها برای هر دانشجو بر اساس قابلیت‌های منحصربه‌فردشان."
    ],
    icon: GlobeAltIcon,
  },
  {
    name: "ارتباط قوی با دانشگاه‌های معتبر جهان",
    description: [
      "روابط مستحکم با دانشگاه‌های برتر جهان.",
      "ارتباط مستقیم با مسئولان پذیرش دانشجویان بین‌المللی.",
      "افزایش شانس پذیرش در برنامه‌های بسیار رقابتی."
    ],
    icon: HandThumbUpIcon,
  },
  {
    name: "صداقت و شفافیت در مشاوره",
    description: [
      "تعهد به ارائه مشاوره‌ی شفاف و درست در مراحل مختلف.",
      "اطلاع‌رسانی دقیق از تمامی هزینه‌ها و مراحل مربوط به پذیرش و مهاجرت.",
      "پاسخگویی کامل و به‌موقع به تمامی سوالات و نگرانی‌های دانشجویان."
    ],
    icon: ShieldCheckIcon,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-gray-50 py-16 px-6 lg:px-20" dir="rtl">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">چرا اپلای دان را انتخاب کنید؟</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          ما در اپلای دان با سال‌ها تجربه و ارتباطات گسترده، مسیر پذیرش تحصیلی بین‌المللی را برای شما ساده‌تر، شفاف‌تر و موفق‌تر می‌کنیم.
        </p>
      </section>

      {/* Features */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div key={feature.name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
            <feature.icon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              {feature.description.map((line, i) => (
                <li key={i}>• {line}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Extra Services */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">و دیگر خدمات ما</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          راهنمایی برای تهیه مدارک درخواست ویزا، پشتیبانی پس از پذیرش برای اقامت، آشنایی فرهنگی و موفقیت تحصیلی.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          تماس با ما
        </Link>
      </section>
    </main>
  );
}
