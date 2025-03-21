import React from "react";

const diseases = [
  {
    name: "Breast Cancer",
    description:
      "Breast cancer occurs when abnormal cells in the breast grow uncontrollably. It is one of the most common cancers among women. Symptoms may include a lump in the breast, changes in breast shape, and unusual nipple discharge. Regular mammograms and self-examinations help with early detection, improving treatment success rates.",
    treatment:
      "Treatment options include surgery (lumpectomy or mastectomy), radiation therapy, chemotherapy, hormone therapy, and targeted drug therapy. Early detection greatly improves outcomes."
  },
  {
    name: "Ovarian Cancer",
    description:
      "Often referred to as a 'silent killer' because symptoms are subtle and can go unnoticed. Common signs include bloating, pelvic discomfort, frequent urination, and changes in bowel habits. Early detection is key, and genetic testing can help identify risk factors.",
    treatment:
      "Treatment typically involves surgery to remove the tumor, followed by chemotherapy. Targeted therapies and immunotherapy are also emerging as effective treatments."
  },
  {
    name: "Endometriosis",
    description:
      "A chronic condition where tissue similar to the lining of the uterus grows outside the uterus, causing pain, heavy periods, and infertility. Symptoms include severe menstrual cramps, pelvic pain, and discomfort during intercourse.",
    treatment:
      "Pain management includes NSAIDs and hormonal therapies like birth control pills or GnRH agonists. In severe cases, laparoscopic surgery or hysterectomy may be needed."
  },
  {
    name: "PCOS (Polycystic Ovary Syndrome)",
    description:
      "A hormonal disorder that affects ovulation, leading to irregular periods, acne, weight gain, and excessive hair growth. It is also linked to insulin resistance, increasing the risk of diabetes.",
    treatment:
      "Lifestyle changes (healthy diet and exercise) help manage symptoms. Medications like birth control pills, metformin, and anti-androgen drugs are commonly used."
  },
  {
    name: "Cervical Cancer",
    description:
      "Caused primarily by persistent Human Papillomavirus (HPV) infection, cervical cancer develops in the cells of the cervix. Early stages often show no symptoms, but later stages may include abnormal bleeding, pelvic pain, and discomfort during intercourse.",
    treatment:
      "Prevention includes HPV vaccination and routine Pap smears. Treatment options range from surgery and radiation to chemotherapy in advanced cases."
  }
];

const WomenHealthTracker = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-2hite-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-pink-600">Women's Health Tracker</h1>
        {diseases.map((disease, index) => (
          <div key={index} className="bg-pink-200 p-4 my-4 rounded-lg shadow-md text-left">
            <h2 className="text-xl font-semibold text-pink-800">{disease.name}</h2>
            <p className="text-gray-700 mt-2">{disease.description}</p>
            <p className="text-gray-700 mt-2 font-medium"><strong>Treatment:</strong> {disease.treatment}</p>
          </div>
        ))}
        <div className="text-gray-600 text-sm mt-4">&copy; 2025 Women's Health Tracker. Stay informed, stay healthy.</div>
      </div>
    </div>
  );
};

export default WomenHealthTracker;
