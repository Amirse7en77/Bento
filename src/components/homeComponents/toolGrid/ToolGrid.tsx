import React from 'react';
import ToolCard from '../toolCard/ToolCard';

const tools = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBMvwvoMuJOWofkGlNRRpHQKqjYwleF83-kYpVQW0d-RXRj9qoEiWPo7AJlLtmYL14HFmZ-gxAPzmMaxBhj3-6rnyP1m0-_2qBdeJtYvxZ1zTu_dAzmIPMKDbPPrzuXhxYpmR3U4H6E9_dob8_zu1NFwFFRVzRSOCIuY7tKQkqGvfdhnfaVz4DRulDarJILgnL8IJz2rRo-OeyRmVcno2FHk1z_Ljux7TTdX7hzHBunXddqcMQB7760tzvigjreK3jINDjrFscJAQ",
    title: "VisualCraft AI",
    description: "تصاویر خیره‌کننده با هوش مصنوعی تولید کنید، عالی برای بازاریابی و طراحی.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA292bPSeRBLA_4ZsqO8d87zdUOZxKj7ip3j_DE0HUmidAOvFVZ3XJZIarjKSCXfLOeCSJkrdhY4c9r2XgIyNn8_WRJwcaBMEvyi8KOuQFCQZBmsanVjBzHMOh-hP4Iy9SZNrwYZ8gmXR6ET1VLMyPxT-w7jRXBngGf1uebWpBBxDfYMr32c3DJkVQhGNTAs1JzajtA_SaWaQ663CrwlKSX0QuOgY52QhRplmMBhndsJ0DpGbsMv4Jph4I3CVNixn1tt7d6unU1zu4",
    title: "TextGenius Pro",
    description: "تحلیل و تولید متن پیشرفته برای تولیدکنندگان محتوا و تحلیلگران.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD7_-glu_pEkG8vMugP4w9UuO47Eut0h3WQUYEkApsco6nIU4kUVcpoVfxUzNtNG-iRr-pidOsmUX4vq0g66xa6Wyfg_YCU73rvFNajGZlHJeEy45d4tyrDAZDe3uQCMMviayzyp8ZCgv_53XcCBwK0AWfBYkWxboRqxG44oh6RYp1x1ocP3fM_BG8Ft3Jut1-bM0vqiAWozX_WsOIA6IFSi5Nx51MqM0G5d_NESHxhW9o7pD8mtMIsKAP0x3pMIoHj9mN9h6iYtY",
    title: "VideoMagic Studio",
    description: "ویدئوها را با ویرایش، افکت‌ها و بهبودهای مبتنی بر هوش مصنوعی متحول کنید.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE4FfJx5cSgiEms3pWbFBFshguOvQVDHHr993vowwLZDYlvDAh2y2rQf_7byKd1wk1hnLxT773eDU2Vz-wbDg7opZoxMR8z5ODfvwt7cU9xPL5lSsSXufg9HbB6KT5fp-OoQai1iznYZ9koTyNfjli81PoILib4m9NTtiCIXC2t0YQo6ecJMm1Sub0uvll8dZ2xT6uNjqosfsg574RgEst137n6Zjjyrp72Eu1FakxLqxiJzSacLd2ZOb_IbVNdjOXzGDHWYK3bN4",
    title: "DataViz AI",
    description: "بینش‌های داده‌های پیچیده را با نمودارهای مبتنی بر هوش مصنوعی به راحتی تجسم کنید.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYm5MMPTigsl-0oPHTaw8YhKW5WFW9Wg2vyyDdeYYOf-SUPQyMcBGU6vKcE5vLPHX5kbb2BdnvZR61yEmigvnGBN58vLLiDppL2y7OlE9wwI6heDZKrL6vZB2PbfTZjwh_-Nz_RdyszkXDwVGT4KYvGAKXWr3MIq4zUlb8dq2SZ1YkwQImaNZRI_gsJMmUoJJrKh9dhv9lW7dYMkkBvjiI",
    title: "CodeAssist Pro",
    description: "دستیار کدنویسی مبتنی بر هوش مصنوعی برای افزایش بهره‌وری توسعه‌دهندگان.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLVFVQDTYiM-DR482fqNUw-AiVmv5dz4J3ACMXYz4V-gIhEm4onkW0-fDcjy3N7bW7UKt1xgZYl7UxLAdiDac-6kHj1HZ_sj1xUvqkM22umshSfLd-LZqQG348-9xwV8Q8euOIObG8hgge7xJ0mdFkRqFnC4fsR3YfKCDzrIhiCokqBKZqUXMi150oup0pFnMPS8dXO-gTUAaU4VKIpa7b9xf52xvvcBC9iw67jQQK4Dy44GsATWA0uz71eJfTKzLKgB9mCHBWws8",
    title: "AudioClarity AI",
    description: "وضوح صدا را افزایش دهید، نویز را حذف کنید و کیفیت صدا را با هوش مصنوعی بهبود بخشید.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJC6cAQkaN6RRv6T6ah0qy65-MNJpS2OtQMf7yh_ezEs6dROgrpa-U-MSryX0vT686CC1ktrFv7aMzA7edzoO-0E96XxBW_tcYUu4zO5Bcy-2Amex5yWE56E2EYbCNYnGW81OGnuxDi8sKTRXx06V_mn_wLEvvKJn3k4s6xGMywJrrjDa_2Rca0z3zjWsyeHie89BJuwjbtXbCDCglW80Db6HVHcBADQM0578t5RNQ_n3XANj9099WOrwleQTZWzcROs-8CRxOXwY",
    title: "MarketMind Insights",
    description: "با استفاده از تحلیل مبتنی بر هوش مصنوعی، بینش‌ها و روندهای ارزشمند بازار را به دست آورید.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA66NM3YlSqfwPlzh9bNb-Dcq3m3-5HrAKfVklDzlcy1ootRvtTQbvawnQ2gNOXFRPbepB2n2cwxWGa3oV0LNcv144Fo1SvRaAyKUwqOxIdKi7gJkMNkbbR4wEROv3bZXFlH1MeKbxZ-hE5dwYOt9yu6YJJGs7ZhSG_gjPMzI1NEzda23aarKuPBCiLpeb3qczuig8ZmezaqxZVFv5X29-eqHQEndwMxy4TNbMjWf5Xm6f-JPnlvPE6rVmCUN2dzFU1w1_zOXF--g",
    title: "DesignSpark AI",
    description: "طرح‌ها و گرافیک‌های خیره‌کننده با کمک هوش مصنوعی و قالب‌ها ایجاد کنید.",
  },
];

const ToolGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {tools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  );
};

export default ToolGrid;