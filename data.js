// FULL DATA EXTRACTION
const initialData = [
    {
            subject: "Anatomical Pathology",
            icon: "Microscope",
            color: "bg-blue-50 border-blue-200 text-blue-800",
            sections: [
              {
                instructor: "HOD, Dr. Amadi D.C.",
                topics: [
                  { id: 'ap1', title: "Intro to path", gdoc: "https://docs.google.com/document/d/1BbKXQBlcnq7FzrQFX_wbtG-DvKbB6ncPgyOjPRmHyiE/edit", nlm: "https://notebooklm.google.com/notebook/51e78f90-e04f-4557-ba74-da75654fc6cd" },
                  { id: 'ap2', title: "Cellular injury, cellular adaptation, and cell death", gdoc: "https://docs.google.com/document/d/1fIgfyYg9Z44BmrpNc3O6XNxjZFptIbXq6ysZc8fbHpo/edit", nlm: "https://notebooklm.google.com/notebook/3b00f84c-83e7-4b73-87fa-1e7425521010" },
                  { id: 'ap4', title: "Wound Healing", gdoc: "https://docs.google.com/document/d/136H6lk4wmKARZ2uuDPhrCOy2cGpZ0EtpiEP3c9yQKMA/edit", nlm: "https://notebooklm.google.com/notebook/e120beac-6090-4b59-85dc-e1841b6fd2ae" },
                  { id: 'ap5', title: "Genetic disorders", gdoc: "https://docs.google.com/document/d/1C6tEuYnh82rgceop5WXUqdraqTUDWcmtm8FhuJrd2eE/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/426a6478-8ba5-4f3b-9ec8-6c4ed840bf70" },
                  { id: 'ap6', title: "Genetic disorders 2", gdoc: "https://docs.google.com/document/d/1nmJfUzEs_EDXlBxveBQHaCiP_i7N0dNlZoqqeJq6gBU/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/a7bc4f04-8f93-4f2e-a27a-bd156c137a58" },
                  { id: 'ap7', title: "Environmental and Nutritional Disease", gdoc: "https://docs.google.com/document/d/1qEzOad79ZKxjx4D7ij7rUn1eoWO30hER3ZCejQv5D8c/edit", nlm: "https://notebooklm.google.com/notebook/3e9a0b05-8f06-4b02-8f7e-bee8e8a04357" },
                  { id: 'ap8', title: "Hemodynamic Disorders, Thromboembolism, and Shock", gdoc: "https://docs.google.com/document/d/1dpXXwAt8qJz8btkJ7FfFGsLFYoiqqFmpkz7PGTifZZ4/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/095ee2c8-4eae-47e5-885f-887284e365d3" },
                  { id: 'ap9', title: "Cardiovascular System 1", gdoc: "https://docs.google.com/document/d/1te6NVsmORH6pJj1w14rXodXFK44i21hrRUQyhXSFvnQ/edit", nlm: "https://notebooklm.google.com/notebook/2c075600-2d64-412a-9eef-7308d40b1d91" },
                  { id: 'ap10', title: "Cardiovascular Pathology 2", gdoc: "https://docs.google.com/document/d/1L1XHGhjwPBbyWtILoJorcYRiMvqy-fueGfJ5CcFvNEQ/edit", nlm: "https://notebooklm.google.com/notebook/885490a0-d91b-4e86-9927-618d77bed028" },
                  { id: 'ap11', title: "Hepatobiliary System 1", gdoc: "https://docs.google.com/document/d/1RAGvaKiRffmOf1Jl75UewAEBZM0pI81gSX4GAZGjlbg/edit", nlm: "https://notebooklm.google.com/notebook/aa523d7f-a649-4332-8025-fda3637187a4" },
                  { id: 'ap12', title: "Hepatobiliary System 2", gdoc: "https://docs.google.com/document/d/1FXtkwQ7hBdxOPPcq9PnY4TzxfqYfbF1u1TcbQgeGgYQ/edit", nlm: "https://notebooklm.google.com/notebook/4d193d34-e850-444e-b488-d5d1a057b080" },
                    // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Dr. I. G. Nweke",
                topics: [
                  { id: 'ap13', title: "Inflammation", gdoc: "https://docs.google.com/document/d/1guHgFE4HQKnRKRU_a_birPux947pdJan_H8JSt8edTg/edit", nlm: "https://notebooklm.google.com/notebook/a9324d2c-34c9-4502-8f61-d88b072c65a3" },
                  { id: 'ap17', title: "General Pathology of Infectious Diseases", gdoc: "https://docs.google.com/document/d/1XB2Bot7GjZBggzO8OH-ouQsXpWaQYUBQh9ck7ohoRlE/edit", nlm: "https://notebooklm.google.com/notebook/49e1d422-4816-4abb-bb78-b9480281f312" },
                  { id: 'ap18', title: "General Pathology of Infectious Diseases - Pulmonary Tuberculosis", gdoc: "", nlm: "" },
                  { id: 'ap19', title: "Pathology of the Lungs - Introduction", gdoc: "", nlm: "" },
                  { id: 'ap20', title: "Pathology of the Lungs Cont'd", gdoc: "", nlm: "" },
                  { id: 'ap21', title: "Pulmonary Infections and Tumours", gdoc: "https://docs.google.com/document/d/1XxC0qM9B5UFsTqhLKRaev4Z9OYF3MPW8x_MiXFZIDac/edit", nlm: "" },
                  { id: 'ap22', title: "GIT Pathology: Esophagus, Stomach", gdoc: "https://docs.google.com/document/d/1ufxwEsG1Q7EwUopJ5SHToQwXorhgGzflcUM-_UqeywM/edit", nlm: "https://notebooklm.google.com/notebook/0412e7b6-19f1-4066-8724-99ad08b2d8fc" },
                  { id: 'ap22a', title: "Acute appendicitis and Colonic Adenocarcinoma", gdoc: "https://docs.google.com/document/d/1MuApsKt4eDAy-xzizsWe6QbqW7OZL8f222Fjt1qZxwA/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/f36d3304-b6fd-4ee3-91c0-88c6a8e06f0a" },
                  { id: 'ap22b', title: "Diseases of the salivary glands", gdoc: "https://docs.google.com/document/d/1qDjtdXH8GCyimXvx3ZSPS_d6QIYhWULjD2RMk4cW7EU/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/49e1d422-4816-4abb-bb78-b9480281f312?authuser=3" },
                  { id: 'ap22c', title: "Non Neoplastic Lesions of the Ear, Nose and Throat", gdoc: "https://docs.google.com/document/d/10R919G7DJR72KVMB6NCcClojJSPepyQ-WmISUPBSJhQ/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/313d354c-5e24-4860-b121-7dc6171a5068" },
                  { id: 'ap22d', title: "Inflammatory and Structural Conditions Affecting the Ear", gdoc: "https://docs.google.com/document/d/1d70JZkSHjfbA4ncKMVnYXNPzuP2DrjN27dyILX9UEsM/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/8638c70d-f45d-4623-b66d-bb67e53c2ccd" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Dr Nnadi Godfrey Ikechukwu",
                topics: [
                  { id: 'ap25', title: "Neoplasia - Neoplasm", gdoc: "https://docs.google.com/document/d/1gvEB3f4QSS9_HYwlAAAZFIdxuyB60CtlDpqSRqyfWNY/edit", nlm: "https://notebooklm.google.com/notebook/248db989-a344-491a-b290-2751557b4ae9" },
                  { id: 'ap26', title: "Hemodynamics", gdoc: "https://docs.google.com/document/d/1CbU7_lAcDYwqPV7k1YSaNlKMBvSQRggx1HP-d-xMMAY/edit", nlm: "https://notebooklm.google.com/notebook/199ff529-9657-44cd-abd2-e28fdd092daf" },
                  { id: 'ap29', title: "Breast Pathology", gdoc: "https://docs.google.com/document/d/1UDYSxtir27lqIFBPuqg2qBMX0StgQwJuMsVgGrYoFgA/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/af98efbd-5c87-40d0-9ed2-1c669612f6a2" },
                  { id: 'ap30', title: "CNS I", gdoc: "https://docs.google.com/document/d/1xgZbll3_gceDbR2lzorOaPN89ShpeZXb2f8p4ftfQN8/edit", nlm: "https://notebooklm.google.com/notebook/f4b7a066-ff80-4701-b932-8b88a6bd52fd" },
                  { id: 'ap31', title: "CNS II - Principles of CNS Tumors", gdoc: "https://docs.google.com/document/d/1z-O79WJhLoWtJ6TRX9Aerl6eUCEL-R2YLz9gADgu2Yk/edit", nlm: "https://notebooklm.google.com/notebook/0a7daea4-85b5-4719-bb48-d957a116aeb8" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Prof. Chiemeka Michael",
                topics: [
                  { id: 'ap32', title: "Amyloidosis", gdoc: "https://docs.google.com/document/d/1-q-8_Km2cZDQ5hCmibEPB2RogUbVdF-0xdfKJfP-lFM/edit", nlm: "https://notebooklm.google.com/notebook/a5cefb66-a662-4078-a3c0-1a0786219ac1" },
                  { id: 'ap33', title: "Introduction to Hypersensitivity Reactions", gdoc: "https://docs.google.com/document/d/18hdqdX8DZy20zcODQB7EOgbuUq8xZo7Rt7wuguc_PMI/edit", nlm: "https://notebooklm.google.com/notebook/210a2e16-8fb1-4a07-be8f-dbe11fd0c6a5" },
                  { id: 'ap34', title: "Diseases of Infancy and Childhood 1", gdoc: "https://docs.google.com/document/d/1sSElVYEoWmSfT--Hj65EUKTqPP1bEHoCmzP9Fj83v4A/edit", nlm: "https://notebooklm.google.com/notebook/6218a5a1-2340-40c5-8436-0b0e8b0d6a14" },
                  { id: 'ap34a', title: "Diseases of Infancy and Childhood 2", gdoc: "https://docs.google.com/document/d/1rkWiji4F8YDwNIIjLwflMWZb4783nIBvGa337fel1c8/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/a8ba9768-636b-439b-8bc7-3380ea4f7af3" },
                  { id: 'ap34b', title: "Endocrine Pathology", gdoc: "https://docs.google.com/document/d/13e1IqxJa9hwSBhQOJZyYiQOnD-jxg8K-nhlmQQkq33s/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/ad36ca80-14e2-4c10-a1f7-5245b2796373" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Presentation Topics (Anatomical Pathology)",
                topics: [
                  { id: 'ap35', title: "Malaria - Group 7", gdoc: "https://docs.google.com/document/d/1MPnKnLdSkYIC85IcVE4OflY-STPpKgNqIqyMN2kW7z4/edit", nlm: "https://notebooklm.google.com/notebook/3869bc7c-6a41-44c9-b371-3965830b7a4f" },
                  { id: 'ap36', title: "Schistosomiasis - Group 5", gdoc: "https://docs.google.com/document/d/131IkCIdYUvlgmfdoVRwc9ZQKiImgupOnAvNwdWNToYs/edit", nlm: "https://notebooklm.google.com/notebook/18789746-af1e-47eb-9c0a-1beaed5899c7" },
                  { id: 'ap37', title: "Tissue Processing - Group 11", gdoc: "https://docs.google.com/document/d/1oovnZ2OrYg6tWC_OkZ0RxZje0VwVk3KcyqJHufr3rVA/edit", nlm: "The main goal should be to teach a medical student. So the audio overview should be structured in a way that is memorable and easy to understand." },
                  { id: 'ap38', title: "Special Techniques in Histopathology - Group 6", gdoc: "https://docs.google.com/document/d/1DNPkIjND6R4ynq0ZGccViWFoV4tiEJzW4lvYWIp0lAk/edit", nlm: "https://notebooklm.google.com/notebook/204a3feb-4e8f-46fe-9478-5262ed3a97a0" },
                  { id: 'ap39', title: "Pathology of Shock - Group 3", gdoc: "https://docs.google.com/document/d/1o9GScPpbQKYk-1dB5Epb0J5ZJmNZcATRTiEe0Do7Lmc/edit", nlm: "https://notebooklm.google.com/notebook/0b4c38e4-74f3-49a6-9374-63d80bcd2c99" },
                  { id: 'ap40', title: "Pathology of Syphilis - Group 8", gdoc: "https://docs.google.com/document/d/1ErciImobjimwU1fWuTb7M4nEceCuN6mgPbAUSsFqSFA/edit", nlm: "https://notebooklm.google.com/notebook/a548cad0-4a48-4970-b584-a4afeaec26e5" },
                  { id: 'ap41', title: "Pathology of Leprosy - Group 9", gdoc: "https://docs.google.com/document/d/1C7jgJj1lk19gJnIwYnmeRTigHgyGFCf13X04hMfM9IM/edit", nlm: "https://notebooklm.google.com/notebook/b3d00f05-fec1-4d6e-9a29-4555a06cf800" },
                  { id: 'ap42', title: "Pathology of Amoebiasis - Group 2", gdoc: "https://docs.google.com/document/d/1wpPKPxEdHnJ2tn2Gz1kpFkTQDCA1i4QGf7CKlO79PA4/edit", nlm: "https://notebooklm.google.com/notebook/f491b235-f0f1-4a73-9718-4403f5d82fcf" },
                  { id: 'ap43', title: "Pathology of Tuberculosis - Group 10", gdoc: "https://docs.google.com/document/d/1zC06osFhtzb5aLKW7xlQN0ccHrq_pSTQJDdFL0NKEoo/edit", nlm: "https://notebooklm.google.com/notebook/7294b6fc-299b-4576-a7e5-1b327c2bacf4" },
                  { id: 'ap44', title: "Pathology of Hypertensive Cardiovascular Diseases - Group 1", gdoc: "https://docs.google.com/document/d/1Sep0_A1pDdTmV_t4lqbraKLiAqk2jGWfLwyYFDGRdO8/edit", nlm: "https://notebooklm.google.com/notebook/abdbd592-8415-42d8-bc7a-ec4a55f3ba59" },
                  { id: 'ap45', title: "Pathology of Single Gene Disorders - Group 4", gdoc: "https://docs.google.com/document/d/16LLCVaS-VY2SYF4D3Whlh3SpJ7H6D51c-oT5ndVJhLY/edit", nlm: "https://notebooklm.google.com/notebook/22a11f13-3fb5-429f-a2de-a48b27b940fe" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              }
            ]
          },
          {
            subject: "Chemical Pathology",
            icon: "Beaker",
            color: "bg-amber-50 border-amber-200 text-amber-800",
            sections: [
              {
                instructor: "HOD Dr. Chibuzor A.",
                topics: [
                  { id: 'cp1', title: "Introduction to Chemical Pathology", gdoc: "https://docs.google.com/document/d/1YwZgwaOFawra7A9lkTKTdhal6EZRiEQC1S9rz7T10EI/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/e45d4c80-35bb-4971-9db4-54714b361686" },
                  { id: 'cp2', title: "Specimen Handling and Pre-analytical Variables", gdoc: "https://docs.google.com/document/d/118Bcz1AOWOsp25Tm7iuwjWfsKWzBODPllZk8IfknT-Y/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/7650997e-a587-479f-b810-4e578580e842" },
                  { id: 'cp3', title: "Non-Controllable Variables & Biological Rhythm", gdoc: "https://docs.google.com/document/d/1DL3zKs9FjE0MC5EttatHqiCCYe7ilQJdjhCMq8Tu6Rk/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/9393f142-d356-4544-b269-0a5614d04d17" },
                  { id: 'cp4', title: "Specimen Collection, Sources & Error", gdoc: "https://docs.google.com/document/d/1l5nNo4ziVquZ3YOR0qg_-QxJRBGsOrw9fMrMsOYbZx8/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/299ddaad-d0e0-484b-bc7c-9b2bf2cc63dc" },
                  { id: 'cp5', title: "Presentation on Instrumentation: Analytical Instrumentation in Chemical Pathology Laboratory", gdoc: "https://docs.google.com/document/d/1YPEIWTmBAMCs8-gJfZj7Vt0LcoK5C7eI-SOalvYeRvU/edit", nlm: "https://notebooklm.google.com/notebook/9361dab0-d1ef-45e9-b554-9ce7b4d0b450" },
                  { id: 'cp6', title: "Potassium Homeostasis", gdoc: "https://docs.google.com/document/d/1yjaxk_gx0NEPLWKvTc0Fs_OvCBD2Gm4tAIzE6znT7SA/edit", nlm: "https://notebooklm.google.com/notebook/67fea190-8b0a-4b4c-ae2a-e732a7e274b4" },
                  { id: 'cp8', title: "Urinalysis", gdoc: "https://docs.google.com/document/d/1UlyntXi_Evp3n8f1kA-rdVUqeIY8K3JIUc8P_nbZZRo/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/508bb26a-1dd0-4574-8820-13c6bf14c15b" },
                  { id: 'cp9', title: "Tumour Marker", gdoc: "https://docs.google.com/document/d/1v5OlmRk97P2-42lu14coCEezdxEqSusr4xSXK6bnfP8/edit", nlm: "https://notebooklm.google.com/notebook/af25906b-0458-41a0-a8c4-baaad0a394d3" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Dr. John Ohiri",
                topics: [
                  { id: 'cp11', title: "Laboratory Safety, S.I. Units and Reference Ranges", gdoc: "https://docs.google.com/document/d/1pS-N71Plz_MERmWtHVDNw4eFVcj7GYgW7c_rGcoFcW8/edit", nlm: "https://notebooklm.google.com/notebook/ab3ccde6-26b8-49ee-b1a8-f025af3fbdcd" },
                  { id: 'cp12', title: "Fluid and Electrolyte Balance", gdoc: "https://docs.google.com/document/d/19GgYSthUwA7tR33zABWVeIJd9-XhSz6zs3gTPy17DLg/edit", nlm: "https://notebooklm.google.com/notebook/f139fcb2-b0a4-4f6b-9e61-194d0d051584" },
                  { id: 'cp13', title: "The Kidney Function Tests (KFT)", gdoc: "https://docs.google.com/document/d/1tugBkBd3N1kb2VWVnAlSfD8K1HuhF8YzvcAPSNrdGJ0/edit", nlm: "https://notebooklm.google.com/notebook/c985558c-435b-44a5-8489-e29edaf388b9" },
                  { id: 'cp14', title: "Acid - Base balance", gdoc: "https://docs.google.com/document/d/1-cNYpr1ZBZk0UBKp7tUpgbxQfVLq3DZg6ETMJE7dEA4/edit", nlm: "https://notebooklm.google.com/notebook/baa484c0-3231-416c-9b1c-688a2548ede6" },
                  { id: 'cp15', title: "Diabetes", gdoc: "https://docs.google.com/document/d/14RkjdKHiYLDdkl2czTc2LOgupNQQwrPmegXmW8nrg0A/edit", nlm: "https://notebooklm.google.com/notebook/096bb51b-3b80-47e9-8f53-d03f7621f388" },
                  { id: 'cp16', title: "Thyroid Function", gdoc: "https://docs.google.com/document/d/1t88soCqhaqKoKKDd-bjmFb0UJKoZ2qt4t_zWLzmmBMw/edit", nlm: "https://notebooklm.google.com/notebook/f807c54c-398e-4789-b719-1cc4dbfb921d" },
                  { id: 'cp16a', title: "Gastric Function, Pancreatic Function and Malabsorption syndromes", gdoc: "https://docs.google.com/document/d/10oM44Bn-kYOZOMygNdUChFVAiDbutxf0vyjhIn84DVQ/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/c8abdec3-ecb8-468b-a61b-6cf8d11e0093" },
                  { id: 'cp16b', title: "Porphyrias", gdoc: "https://docs.google.com/document/d/1GMst7vm6oZ2bVBe72y4huBrFyUx7m-WY_w-ZubwjXX0/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/0af95cc2-1a97-449f-8f83-404c878dd1fd" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Mr. Obinna Nwabueze",
                topics: [
                  { id: 'cp17', title: "Introduction to Chemical Pathology Practicals, Different types of body fluids, Methods of Collection", gdoc: "", nlm: "" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Dr Okwara E. Chidiebere",
                topics: [
                  { id: 'cp18', title: "Metabolic Bone Disease", gdoc: "https://docs.google.com/document/d/1WYKbPUpznldjHXkbAodlGdwc3u62AvXvAn1QDuIkJGY/edit", nlm: "https://notebooklm.google.com/notebook/8e5a87b8-c30b-4134-83b2-495c6e2e96b6" },
                  { id: 'cp19', title: "Renal Tubular Acidosis", gdoc: "https://docs.google.com/document/d/1M-Gfb8HFDyPU3YqFEEEf0MVGmaEwaEyoGvoPTdJBUmg/edit", nlm: "https://notebooklm.google.com/notebook/a34f1834-8754-427e-9f16-ec99455f878f" },
                  { id: 'cp20', title: "Bilirubin Metabolism", gdoc: "https://docs.google.com/document/d/1sff8ICVo-FLhneaeHSOkgjByZy9bDeO2nUBi080xSts/edit", nlm: "https://notebooklm.google.com/notebook/9dc1aa65-5e80-4662-b627-ad89d636bcb7" },
                  { id: 'cp21', title: "Hyperuricaemia & Gout", gdoc: "https://docs.google.com/document/d/14AXjCEPbFeu5rBc_8gO4R0Udep4jr6-8l6jektw_QQ4/edit", nlm: "https://notebooklm.google.com/notebook/5e1b86e7-c520-4f54-9ba4-409dfc04fdd9" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Dr. Nwadinigwe Fortune",
                topics: [
                  { id: 'cp22', title: "Liver Function Tests", gdoc: "https://docs.google.com/document/d/1v93mdSMgYlh4j1P4ic0YyuzCF9pnseRJFC23pH5dPPA/edit", nlm: "https://notebooklm.google.com/notebook/a40c7e00-0be0-4055-b456-89d70ffb2bab" },
                  { id: 'cp23', title: "Magnesium Metabolism", gdoc: "https://docs.google.com/document/d/1y8qDUOCQvjf6LmNloRP_nSEIzArFGIiRGmbDQsBqWzA/edit", nlm: "https://notebooklm.google.com/notebook/1a1c7028-d83a-458a-b0f2-a3a7caa298b3" },
                  { id: 'cp24', title: "Plasma Proteins and its Disorders", gdoc: "https://docs.google.com/document/d/15b9b5nBtGVpJOjizqB0L8OL5wcq32Vg9iVcAFTzv1O4/edit", nlm: "https://notebooklm.google.com/notebook/593707fb-2a09-4855-ae7d-83e4ddaf12d9" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Dr. Udeji Venus Chinyere",
                topics: [
                  { id: 'cp25', title: "Point of Care Testing and Application", gdoc: "https://docs.google.com/document/d/1YDDE6u5bTCCI1ODGpQg1Y9E6irGQj0zE1FIVnVTCTEk/edit", nlm: "https://notebooklm.google.com/notebook/c8844f4c-b18a-4ee0-8597-0c63c424f0b3" },
                  { id: 'cp26', title: "Cerebrospinal Fluid (CSF) in Health and Diseases", gdoc: "https://docs.google.com/document/d/1h4dVSsEhjBrTKetU3w9dSyTrID4GSfzAi6rC0zsgsWA/edit", nlm: "https://notebooklm.google.com/notebook/414da67d-72cb-47ef-90a9-6fa5395f5dfc" },
                     // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              }
            ]
          },
          {
            subject: "Haematology",
            icon: "Droplet",
            color: "bg-red-50 border-red-200 text-red-800",
            sections: [
              {
                instructor: "Dr. Opara HOD",
                topics: [
                  { id: 'ha1', title: "Introduction to Immunology, Lymph node Structure and Immune Function Overview", gdoc: "https://docs.google.com/document/d/1AMSzFe2kXiYuEuEBw6_ZN-BgqX2NR4edHSahm11Z7i0/edit", nlm: "https://notebooklm.google.com/notebook/f5ada1dd-0539-4eff-a5c0-fe69947e14e5" },
                  { id: 'ha2', title: "Lymphopoiesis and Types of Lymphocytes", gdoc: "", nlm: "" },
                  { id: 'ha3', title: "Anemia: Definition, Classification, Assessment, Physiologic Adaptations", gdoc: "https://docs.google.com/document/d/1iNlbuJpq-uaI6_kZCIaIFsKrPFo2dt7Gpev3xFLTtk4/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/b8172c22-537d-4fcd-ae2c-1091f05a3dbd" },
                  { id: 'ha4', title: "Benign Disorders of WBC's", gdoc: "", nlm: "" },
                  { id: 'ha6', title: "Iron Metabolism", gdoc: "https://docs.google.com/document/d/1A3drOW34eLhmFYPpxT7m2d9bcZBfEHKMIcvj7_oud_U/edit", nlm: "https://notebooklm.google.com/notebook/b8e6176a-49ee-4c23-ac04-32052d90fc8e" },
                  { id: 'ha7', title: "Iron Deficiency Anaemia - IDA", gdoc: "https://docs.google.com/document/d/1F6LEMeDIgZnKAhSE8WoonPnOnGX06Qd9_F7puwCabfI/edit", nlm: "https://notebooklm.google.com/notebook/0eb29b93-48a8-4cd9-89c7-900cc8a105f5" },
                  { id: 'ha8', title: "Iron Overload", gdoc: "https://docs.google.com/document/d/1gPzfDj8pCyshT_or0-G3jjHUYWGRvHrWE5dyvob88Cg/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/972e796a-bd65-4202-9911-2303ee1e262b" },
                  { id: 'ha9', title: "Thalassemia", gdoc: "https://docs.google.com/document/d/1s-y2mViUpVq6KivCC0922YQYnKzIGpkiQ75R4Qvjw3w/edit", nlm: "https://notebooklm.google.com/notebook/a8156cec-faba-4b42-87bc-ba590f6f9b2f" },
                 // { id: 'ha10', title: "Hypersensitivity Reactions", gdoc: "https://docs.google.com/document/d/1F6LEMeDIgZnKAhSE8WoonPnOnGX06Qd9_F7puwCabfI/edit", nlm: "" },
                  { id: 'ha9a', title: "Hemolytic disease of the newborn", gdoc: "https://docs.google.com/document/d/1amjZ8WGe6393ZUfsS4p93mdD5h0hdhHr9Foy4d39wak/edit", nlm: "https://notebooklm.google.com/notebook/815ec2df-e95a-41a8-afec-812f29dcc39b" },
                  { id: 'ha9b', title: "Acute Blood Loss and Massive Haemorrhage", gdoc: "", nlm: "" },
                  { id: 'ha9c', title: "Thrombosis", gdoc: "https://docs.google.com/document/d/1AVY0z6CFQEIbZPjBjL2Qv4IdTyVgX5F3irh0OxyG2z0/edit", nlm: "https://notebooklm.google.com/notebook/57e12532-adae-49cc-be9a-7ecf3f1b6183?authuser=3" },
                  { id: 'ha9d', title: "Tumour Markers in Haematological Malignancies", gdoc: "https://docs.google.com/document/d/1IndAsyPZKQDDgwkxI1L10Oo3XnV5bqGCxRuj1wRV5v8/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/0c3e715e-8d95-46e1-80f2-30677a047aa1" },
                  { id: 'ha9e', title: "Chemotheraphy in Immunological Malignancies", gdoc: "https://docs.google.com/document/d/1ygJmXfegZERkRw62XsQ73lAC3mZejYfOJHQyx8nDGFg/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/a6952a03-dd33-4569-bfab-db5acdb26473" },
                ]
              },
              {
                instructor: "Dr. Malachi Iheanacho",
                topics: [
                  { id: 'ha14', title: "Introduction to Hematology and Overview of Hemopoiesis", gdoc: "https://docs.google.com/document/d/1cq3jLGOIDn0g89Rq-gA1GUtaiFJBSiSzUxGt99V_WT8/edit", nlm: "https://notebooklm.google.com/notebook/976f8a08-2cfe-4443-a699-70e4483b5ac6" },
                  { id: 'ha15', title: "Bone Marrow Microenvironment", gdoc: "https://docs.google.com/document/d/1lwkGRa-VWc-P5UTrjRLZ9WX7W5olPlvMAhjVWCpvJxQ/edit", nlm: "https://notebooklm.google.com/notebook/599fed2b-f1b7-4623-a9a2-8fb33f9d52f6" },
                  { id: 'ha16', title: "Introduction to RBC Biochemistry", gdoc: "https://docs.google.com/document/d/1EzbGQanbjJqnI5uI0IJH3b7w_Es3bGPyBKHPpzukKHw/edit", nlm: "https://notebooklm.google.com/notebook/b15d6491-a88e-4ea8-8dfd-7f75f14ab251?authuser=3" },
                  { id: 'ha17', title: "Red Cell Membrane", gdoc: "https://docs.google.com/document/d/1LsSjIIdJcWPBynCcpTrp-QR8OGe8vFJC4FuFRYbN3pM/edit", nlm: "https://notebooklm.google.com/notebook/1334a88f-f40c-46a9-8353-6c88fa42c0e3?authuser=3" },
                  { id: 'ha18', title: "Hemoglobin Synthesis", gdoc: "https://docs.google.com/document/d/1FzwlfGcsFrWGeObzFXt746iuJVgB56Ri_Mv_QYxFVts/edit", nlm: "https://notebooklm.google.com/notebook/0b8435ce-0224-4ab7-80e7-b58fdf1eb6e9?authuser=3" },
                  { id: 'ha19', title: "Immune Hemolytic Anemias", gdoc: "", nlm: "" },
                  { id: 'ha20', title: "Immunology of HIV/AIDS", gdoc: "", nlm: "" },
                  { id: 'ha21', title: "Acute and Chronic Leukemias", gdoc: "https://docs.google.com/document/d/1b_aYf3lnT8rd7zURqS1nOdYdrq1fIwYTFwjlwjdHzpw/edit", nlm: "https://notebooklm.google.com/notebook/6cd18b4e-70c6-4504-84a3-5450695993c9?authuser=3" },
                  { id: 'ha21a', title: "Paroxysmal Nocturnal Hemoglobunemia (Bone Marrow Failure)", gdoc: "https://docs.google.com/document/d/1o1on_vdMbqU9tzgaBlAw1qt9bCCFuqoRPqUypgluNWE/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/164546cc-bbd0-4376-8b26-f3974c085018?authuser=3" },
                  { id: 'ha21b', title: "Aplastic Anaemia (Bone Marrow Failure)", gdoc: "https://docs.google.com/document/d/1z7iEt0hpRpsvjZr2WeZwOoGFRsGZYJ7qv7XX9eugEfI/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/b91ba363-a020-401b-81b0-8d6dad9e9aa6" },
                  { id: 'ha21c', title: "Systemic Lupus Erythematosus (SLE)", gdoc: "https://docs.google.com/document/d/1eNKp-Fwbnur2jDQrPB_FO8M78QNKc7X6dwBJKpZzNCI/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/9ba1150d-f5e0-4070-bd1e-f6e75e51368c" },
                    //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "https://..." },
                ]
              },
              {
                instructor: "Ms. Nnenna Uguru Kalus",
                topics: [
                  { id: 'ha22', title: "Anatomy and Physiology of the Bone Marrow", gdoc: "https://docs.google.com/document/d/1BYa3-9PvHrUFZz_NWlPNzAY1Hey7pifeLoWG_XWuOac/edit", nlm: "https://notebooklm.google.com/notebook/818e5208-6958-48ff-9aba-5ab824f9c89c?authuser=3" },
                  { id: 'ha23', title: "Spleen: Structure and Function", gdoc: "https://docs.google.com/document/d/1pRlavzqwD-n4kzWe_sqfauY5nCpb76HniXpLeGYT5_I/edit", nlm: "https://notebooklm.google.com/notebook/54685abf-5f60-4bb6-8fed-d98a7b25dbd1?authuser=3" },
                  { id: 'ha24', title: "Innate and Adaptive Immunity", gdoc: "https://docs.google.com/document/d/14DB1bc4iyYqDqkbMIE9VXWEeTIVw7XaQDc4lOHD5rlo/edit", nlm: "https://notebooklm.google.com/notebook/91bc799c-62d1-45c3-a023-03d3e7f3c6ca" },
                  { id: 'ha25', title: "Immune Tolerance", gdoc: "https://docs.google.com/document/d/1xBr2KpYTFro9wNZaHUpPYeijDWh9Ve6eEQbTtfjP10k/edit", nlm: "https://notebooklm.google.com/notebook/b5e21a54-4fd5-486f-af0b-07b9c844fd78" },
                  { id: 'ha26', title: "WBC Physiology: Granulocytes, Monocytes, and Lymphocytes", gdoc: "https://docs.google.com/document/d/1WcapBAMvEhw270ZBO_Gk-_3pJzjYMztwSIjkKgENKKw/edit", nlm: "https://notebooklm.google.com/notebook/ec33dba5-e479-4105-b2fe-a37f7252e46b" },
                  { id: 'ha27', title: "Haemolytic Anemia", gdoc: "https://docs.google.com/document/d/1KkZQfdyqflXCs-8HuqtWIr_N7q72F2EhGKvCmcEuqro/edit", nlm: "https://notebooklm.google.com/notebook/21b80f98-b5ba-4bf3-a95e-3a143b848858" },
                  { id: 'ha28', title: "Intro to Transfusions", gdoc: "https://docs.google.com/document/d/1HNG6IfI6TeVqrtXOsZcKK1qDxJRgMpOLhsDDSKAc6GM/edit", nlm: "https://notebooklm.google.com/notebook/3f3aef1c-75d8-4e6c-af9c-e0ca252d2d2e" },
                  { id: 'ha28a', title: "Hemostasis", gdoc: "https://docs.google.com/document/d/1mKEOwRXwUpfxpqHYmynJfxz4IYFnVd5_irGUr9la1js/edit?usp=drivesdk", nlm: "https://notebooklm.google.com/notebook/59f1d0f1-1403-492c-a4a4-4bc6cde643a0?authuser=3" },
                  { id: 'ha28b', title: "Venothromboembolism", gdoc: "https://docs.google.com/document/d/107Paa_OFSS4L9zHnM8EFVZANJf4I8DKL4jSTA880nWk/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/a90a93d2-c4ac-4f27-a48e-1aba4fb66eae" },
                    // ADD YOUR NEW TOPIC RIGHT HERE:
                //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "..." },
                ]
              },
              {
                instructor: "Dr. Ehirim Chinedu O.",
                topics: [
                  { id: 'ha29', title: "Erythropoiesis", gdoc: "https://docs.google.com/document/d/1uMVo0DmQ-K7FJiqoCbb_yFIF3-__jCKD7-AaeHjUYqo/edit", nlm: "https://notebooklm.google.com/notebook/8640ad83-4405-4769-9ae6-9f72601fa8ea" },
                  { id: 'ha30', title: "Thrombopoiesis", gdoc: "https://docs.google.com/document/d/1B_Dgn6YtUXdRgy1GqhvsrZiEK5k8fOVFZbjViNLYKR4/edit", nlm: "https://notebooklm.google.com/notebook/02bb4c51-1a8d-46e6-81b8-b3ad84042aec" },
                  { id: 'ha31', title: "Cell Signalling in Haematology", gdoc: "https://docs.google.com/document/d/1F_8viWY5j3irOzZKgEGSLYYNg3LOdfEWy069RzQI4Xg/edit", nlm: "https://notebooklm.google.com/notebook/9861f794-81ea-429d-bfdf-3cbcf4a5d68d" },
                  { id: 'ha32', title: "Immune Response: Primary and Secondary", gdoc: "https://docs.google.com/document/d/1Td9pTVz8aoWXXFBEROD_ugdbVXz0LlBTQZKyP00mT6g/edit", nlm: "https://notebooklm.google.com/notebook/de3f57bb-0060-46af-82f6-36434427eabf" },
                  { id: 'ha32a', title: "Sickle Cell Disease", gdoc: "https://docs.google.com/document/d/1K_ZCsIn_LGYGerjIiVYJvx8grNwpeFrrZD9saykULXY/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/782087c9-eebf-4886-b2d9-d534b964f8d1" },
                  { id: 'ha32b', title: "Blood products & components", gdoc: "https://docs.google.com/document/d/1PRbcUDzSmiw7V-beOg65tECBzIZ_3ZNNeellq7qd3mo/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/ad1dce4e-3394-4484-a7e1-caabf23700a0" },
                ]
              },
              {
                instructor: "Dr. Mrs. Confidence Nwabugwu",
                topics: [
                  { id: 'ha33', title: "Myelopoiesis", gdoc: "", nlm: "" },
                  { id: 'ha34', title: "Plasma cell development", gdoc: "https://docs.google.com/document/d/1V1m2gSOHvLz4yhGDks1H8VtaTs2OKJQ_0jCS21zK1OI/edit", nlm: "https://notebooklm.google.com/notebook/9a30eddf-89f6-4a85-911b-0ad475b43d4d" },
                  { id: 'ha35', title: "Antigens, Immunogens, Haptens: Antigenic Determinants", gdoc: "https://docs.google.com/document/d/1vKrReAdXnGibRXhRKMPp2hDUjFSHlpc7V7R0VYZlmH8/edit", nlm: "https://notebooklm.google.com/notebook/9f65033b-00f8-4ae1-9e4c-b9de25095e9d" },
                  { id: 'ha36', title: "Blood Cell Count", gdoc: "", nlm: "" },
                  { id: 'ha38', title: "Peripheral Blood Cells - Microscopy (lots of pictures)", gdoc: "", nlm: "" },
                  { id: 'ha38a', title: "Immunoglobulins", gdoc: "https://notebooklm.google.com/notebook/63c4654c-bf87-4a1c-abc9-eaf794c3b426", nlm: "https://notebooklm.google.com/notebook/4a5a0373-3652-45c5-ba7b-f398689ae852" },
                  { id: 'ha38b', title: "Blood Transfusion Reactions", gdoc: "https://notebooklm.google.com/notebook/ce865efe-ac3e-43e0-89f9-d4f6c621ff1d", nlm: "https://notebooklm.google.com/notebook/ee9a414c-8bc6-4b96-b060-e460c7d22aef" },
                  { id: 'ha38c', title: "Provision Of Safe Blood: Blood Donor Selection/ Haemovigilance", gdoc: "https://notebooklm.google.com/notebook/d3800046-9251-430a-a131-7804708c7fce", nlm: "https://notebooklm.google.com/notebook/7953e092-9ba3-4438-9313-cb337d553b0f" },
                  { id: 'ha38d', title: "Abnormal Bleeding", gdoc: "https://docs.google.com/document/d/1kdkAcY3PkXXYBpinTV39aYRdjv46y8r2Ak8ekWplVXw/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/67197c90-48e4-48db-bb46-378bd9c24381" },
                  { id: 'ha38e', title: "Thrombocytopenia and Disorders of Platelet Function", gdoc: "https://docs.google.com/document/d/1Rhzabtymsc8GXhacKMd3jwEvBOIliPvmTTd7SfM2ip4/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/d737348a-1e99-465b-9c6f-aeaa542eb1c1" },
                ]
              },
              {
                instructor: "Dr. Mrs. Ralu Emeka-Obi",
                topics: [
                  { id: 'ha39', title: "Haematology Laboratory Quality and Safety", gdoc: "", nlm: "" },
                  { id: 'ha40', title: "Haematology and the Microscope", gdoc: "", nlm: "" },
                  { id: 'ha41', title: "Haematology Laboratory Form", gdoc: "", nlm: "" },
                  { id: 'ha42', title: "Sample Collection, Specimen Types and Bottles, Sample Preparation", gdoc: "", nlm: "" },
                  { id: 'ha43', title: "Haematological Investigations", gdoc: "", nlm: "" },
                  { id: 'ha44', title: "Introduction to Morphology", gdoc: "", nlm: "" },
                  { id: 'ha45', title: "Peripheral Blood Film/Smear", gdoc: "", nlm: "" },
                  { id: 'ha46', title: "PBF Cell Identification", gdoc: "", nlm: "" },
                  { id: 'ha47', title: "Phlebotomy and Film Preparation", gdoc: "", nlm: "" },
                  { id: 'ha48', title: "Stains and Staining", gdoc: "", nlm: "" },
                  { id: 'ha49', title: "Abnormal PBF in Some Conditions - Diagnosis: Sepsis, Hereditary Spherocytosis (HS), IDA, Megaloblastic Anaemia", gdoc: "", nlm: "" },
                  { id: 'ha50', title: "Introduction to Practical Haematology", gdoc: "", nlm: "" },
                  { id: 'ha51', title: "Introduction to Practical Haematology Cont'd", gdoc: "", nlm: "" },
                  { id: 'ha52', title: "Blood Group Serology Techniques: Blood (Cell) Typing and Reverse (Serum) Typing", gdoc: "", nlm: "" },
                  { id: 'ha53', title: "Pretransfusion Testing", gdoc: "", nlm: "" },
                  { id: 'ha54', title: "Hemoglobin Electrophoresis", gdoc: "", nlm: "" },
                  { id: 'ha55', title: "Abnormal Red Cell Morphology", gdoc: "", nlm: "" },
                  { id: 'ha56', title: "Coagulation", gdoc: "", nlm: "" },
                  { id: 'ha56a', title: "Morphology of MPN, CLL and MM", gdoc: "https://docs.google.com/document/d/13O5JfqmK7ojVyDcsrgtetHEHiOwj3u6xnaP6Ds8OUsM/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/f8d7d896-2dc8-4601-a9bf-ae0244c4f2f7" },
                ]
              }
            ]
          },
          {
            subject: "Medical Microbiology",
            icon: "ShieldAlert",
            color: "bg-emerald-50 border-emerald-200 text-emerald-800",
            sections: [
              {
                instructor: "General: HOD Prof Nwokeji",
                topics: [
                  { id: 'mm1', title: "Sterilization, Disinfection, and Infection Control", gdoc: "https://docs.google.com/document/d/1QfWU1jrQugCvoDZmBfSkvP0cOGjgCzFadvcIrqbxBqI/edit", nlm: "https://notebooklm.google.com/notebook/9fd1f584-1943-4358-a388-71cfe59e77a9" },
                ]
              },
              {
                instructor: "General: Dr. Chigo U.N.",
                topics: [
                  { id: 'mm2', title: "Antimicrobial Drug Resistance", gdoc: "https://docs.google.com/document/d/1_a-04luhaOd7YB964F2xCzhQWhRAkHlmv_CBFlPLAiw/edit", nlm: "https://notebooklm.google.com/notebook/ce51da27-26b5-4eb8-a2b5-6f6796ec1766" },
                  { id: 'mm3', title: "Antimicrobial Agents and Chemotherapy", gdoc: "", nlm: "" },
                  { id: 'mm4', title: "Serological Diagnosis of Infections", gdoc: "https://docs.google.com/document/d/1HNYzB4kl4Lvg9fDIv11SrEqLYIAMj3oP-c9iM9hLB70/edit", nlm: "https://notebooklm.google.com/notebook/8a99fda6-9488-42ee-8cae-15666d311a2b" },
                  { id: 'mm5', title: "Microbes of Dental Importance", gdoc: "https://docs.google.com/document/d/1aZBX2cy2zfZWTrLvYJpP2FrRiYkXjbc5mXDYGzZsJJs/edit", nlm: "https://notebooklm.google.com/notebook/3ce79bf3-2f92-4e8e-bf5e-2e04bc091ebe" },
                  { id: 'mm6', title: "Opportunistic Infections (HIV/AIDS)", gdoc: "https://docs.google.com/document/d/1l1NA5XAZg2_q0sG3sGzmGjUgOQ0dIAX_Y9Em1YA-19M/edit", nlm: "https://notebooklm.google.com/notebook/5e1c2c6a-1f37-46bd-aef1-434c6499b44c" },
                  { id: 'mm7', title: "Control of Infectious Diseases", gdoc: "https://docs.google.com/document/d/1el21FrfI64YSQk5NbNTgqaGU8fPhF0I3dClTfMv5SBU/edit", nlm: "https://notebooklm.google.com/notebook/7102a190-dccb-4438-b9d0-b8eddfb4bd4a" },
                  { id: 'mm8', title: "SSTIs", gdoc: "https://docs.google.com/document/d/1RHYxoIcNUS-NVqVjAVee9C49-dkqAxpDk3-u9tZwq40/edit", nlm: "https://notebooklm.google.com/notebook/41bd223b-739b-499d-bad3-5091d2983758" },
                  { id: 'mm8a', title: "Urinary Tract Infections", gdoc: "https://docs.google.com/document/d/1_q-vdfvR6EiJgDPXdMrBhdtmNg1hNnh-xfXTzVHWWsA/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/81a29b24-de96-4af1-8cc6-1c3692b11d0e" },
                ]
              },
              {
                instructor: "Lab Prep: Dr. Nwachukwu",
                topics: [
                  { id: 'mm9', title: "Viral Specimens Selection and Collection", gdoc: "", nlm: "" },
                  { id: 'mm10', title: "Preliminary of Laboratory Exercise", gdoc: "", nlm: "" },
                  { id: 'mm11', title: "Preliminary of Laboratory Exercise cont'd", gdoc: "", nlm: "" },
                  { id: 'mm12', title: "Laboratory Diagnosis of Fungi", gdoc: "", nlm: "" },
                  { id: 'mm14', title: "Practical 3 (Staining and Staining Techniques)", gdoc: "https://docs.google.com/document/d/17l08GBLt4GNoI6_Ul_7LPQFAKo2hWsgziVKlItCiXsk/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/0e26fa6b-249d-430b-89e5-7f38ae0cba85" },
                  { id: 'mm15', title: "Practical 4 (Culture Techniques)", gdoc: "https://docs.google.com/document/d/1xN4J2EIuLyGWNb7WHyW9krvFmTzRc7DlhX1rjHqI6UM/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/f7698e3f-3af6-4caf-abdf-cae268b45e96" },
                  { id: 'mm16', title: "Practical 5 (Bacteriological Examination of Clinical Samples)", gdoc: "https://docs.google.com/document/d/1tkW3PLvKnSfdqHsxiy5_LNmlyH82NKLXlsAuMVzwbZI/edit", nlm: "" },
                  { id: 'mm17', title: "Practical 6 (Examination of Samples for Fungi)", gdoc: "https://docs.google.com/document/d/10DnDBdpUuBUeNaU1nrTXDaNgYygWfZXYq11_7yzfXu4/edit", nlm: "https://notebooklm.google.com/notebook/5f7945d5-1fb7-4f32-918d-1ece43e3800d" },
                  { id: 'mm18', title: "Practical 7 (Immunology and Serology)", gdoc: "https://docs.google.com/document/d/1W5Jus90wvnOe49eTMFSAznvoGyYsdpdwqjTozKwL9ms/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/f283d0cd-be15-4138-9175-d4d42e89c275" },
                  { id: 'mm19', title: "Practical 8 (Virology)", gdoc: "https://docs.google.com/document/d/13uD8u61CBJm99pUsNaGIqqStxbojAWMJCKfRNQV5kgI/edit?usp=drivesdk", nlm: "" },
                  { id: 'mm20', title: "Practical 9 (Parasitology)", gdoc: "https://docs.google.com/document/d/1Pn7wvWsTHONBUr793y-5Q2JEIfUfpi8dicwahBMINsQ/edit?usp=sharing", nlm: "" },
                  { id: 'mm21', title: "Practical 10 (Laboratory Animals)", gdoc: "https://docs.google.com/document/d/1OsjzBC-2UjfLZI5uC8vnv_RFmpKY9UUrzprO8beexS0/edit?usp=sharing", nlm: "" },
                ]
              },
              {
                instructor: "Bacteriology: HOD Prof. Nwokeji Calistus",
                topics: [
                  { id: 'mm23', title: "Introductory Bacteriology", gdoc: "https://docs.google.com/document/d/1L6L7nb9BUxOKXTPnecTzl64-IACDh6Q4c_n1YTMj3V0/edit", nlm: "https://notebooklm.google.com/notebook/28af95c9-92e4-4b6f-8c78-3a1c5789ebef" },
                  { id: 'mm24', title: "Bacterial Pathogenesis", gdoc: "https://docs.google.com/document/d/1qQ5dJRyw0oh3TTVqkcX_U14D6SpBaSIna8l7zifL_Ds/edit", nlm: "https://notebooklm.google.com/notebook/1a81c285-5ca9-4aef-8964-8843d5fa930e" },
                  { id: 'mm25', title: "Staphylococcus", gdoc: "https://docs.google.com/document/d/1dLEF6o49tnIAyOwYMfloyc-9IpFwg2fpvvHu7PwPvzE/edit", nlm: "https://notebooklm.google.com/notebook/15ecaf31-e18d-475d-ac94-3d2cdd25c2a4" },
                  { id: 'mm26', title: "Streptococcus", gdoc: "https://docs.google.com/document/d/1Fk2esAWvBDsjYDJ8dgamqQ5zf-rp-NiObiB1dfMa-1g/edit", nlm: "https://notebooklm.google.com/notebook/bf2721e8-1357-4409-8f05-3fd03d3c0e02" },
                  { id: 'mm28', title: "Enterobactericeae", gdoc: "https://docs.google.com/document/d/1xz4IGWDUHfDJ4S-zcDCe4mz7Fp71lm9nJmmZhxVAAWU/edit", nlm: "https://notebooklm.google.com/notebook/2db85d33-169a-4ed9-b4ce-5b2522f05a82" },
                  { id: 'mm29', title: "Normal Flora, Microbial Ecology, and Pathogenicity", gdoc: "https://docs.google.com/document/d/1pwRy7nNBL2G4dEs5ZxrdaaUgCMi-ehvSENXEEc2RbFM/edit", nlm: "https://notebooklm.google.com/notebook/42905dbd-01d8-47c0-98b6-896aa40afbd4" },
                  { id: 'mm30', title: "Spirochetes", gdoc: "https://docs.google.com/document/d/1o-qhptJlYj-CIG1n9iyV8sFVyteVVaBPHmUyTwxWsnI/edit", nlm: "https://notebooklm.google.com/notebook/5de1c18a-269a-452c-aa4f-7178097565e9" },
                  { id: 'mm31', title: "Gram Positive Cocci", gdoc: "https://docs.google.com/document/d/1SGBIb7cp-JIQbpPxSogTMLJYQX31hHBSoR9uj4w8nHY/edit", nlm: "https://notebooklm.google.com/notebook/725e5ad8-ecee-42c1-aa08-0c23235986db" },
                  { id: 'mm34', title: "Gram Negative Cocci", gdoc: "https://docs.google.com/document/d/1k2QyW0SE0AdV3coELmrwZGj_DTsMBo8QUjLO--c8h6U/edit", nlm: "https://notebooklm.google.com/notebook/fdfad7af-05ad-40a3-9a01-7e1a66df7e37" },
                 // duplicate with mm44d { id: 'mm35', title: "Shigella", gdoc: "https://docs.google.com/document/d/1P58_rAsnFSdkSkSGmPvnd6E9k14DxbWe58w7ZJTQOFs/edit", nlm: "" },
                  { id: 'mm36', title: "Gram Positive Rods", gdoc: "https://docs.google.com/document/d/1ijocbLwLXCzD61_P2XA4ARRbIfLdsy_7jhQf9TiaB18/edit", nlm: "https://notebooklm.google.com/notebook/d36f0cff-7da7-40cb-bb3a-c2c5482c1115" },
                  { id: 'mm40', title: "STIs and UTIs: Neisseria Gonorrhoeae", gdoc: "https://docs.google.com/document/d/1LP5Z-Ns3p7MZ8Ke34X_aFuzcMu6aXSuqDjWLzXXJgeM/edit", nlm: "https://notebooklm.google.com/notebook/ab2e2936-32ba-4647-b8ba-3b6d81f2428e" },
                  { id: 'mm41', title: "STIs and UTIs: Pseudomonas", gdoc: "https://docs.google.com/document/d/1ft4ju-eBYjghojQ14_TUwIgPzEU9i4p4ztu4m2glk-0/edit", nlm: "https://notebooklm.google.com/notebook/7ae16db9-7c76-4d6f-843d-806b66af5630" },
                  { id: 'mm42', title: "Mycobacterium", gdoc: "https://docs.google.com/document/d/10Xd3j3RCExZ-2NoYh5FQqF7scB2oR2AvP46Vms2a8jw/edit", nlm: "https://notebooklm.google.com/notebook/3079a643-7cd3-46f6-9d76-f2424cdf461c" },
                  { id: 'mm44', title: "Mycobacterium - M. leprae", gdoc: "https://docs.google.com/document/d/1-pk7e45xAAHXIEbqL-9KYFtNVPfliXrS2sOqWab-1Zc/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/4f6dc5a3-db2f-4f98-862d-8a2d3965b350" },
                  { id: 'mm44a', title: "Sexually Transmitted Infections", gdoc: "https://docs.google.com/document/d/16BT6DHpTizAYlS1eGeX7f87wWGNc3NV0DUN10_zwrbc/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/91026276-a89c-4ab0-9fc5-37cf7726054d?authuser=3" },
                  { id: 'mm44b', title: "Campylobacter", gdoc: "https://docs.google.com/document/d/1XVO3Ae1jXgPy6_BbvomUSf0BH1ZSFU9Qrqtrrtw_k_c/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/43b773e5-7a90-45d4-849c-4cda441ca775" },
                  { id: 'mm44c', title: "Helicobacter", gdoc: "https://docs.google.com/document/d/16fonD8k7EY2gx1VPJXL6LRYasXroK9uZ4_YK5mCHwBI/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/1d280244-3af8-4d49-b34f-9544dd2aa585" },
                  { id: 'mm44d', title: "Shigella", gdoc: "https://docs.google.com/document/d/188yFZW02M2EdWXNFmGjOGINCjOQnCOFawHNao5F_uZ8/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/a6e0d5a2-151e-4f78-9729-41db3bdd1843" },
                  { id: 'mm44e', title: "Mycoplasma", gdoc: "https://docs.google.com/document/d/1Gk_ut2YLlQJm4Ma4oXnQYQfYnsNYzf6fYkDBlz6fuNo/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/450fd00d-4a89-4c7c-8783-a2767df98b29" },
                  { id: 'mm44f', title: "Chlamydia", gdoc: "https://docs.google.com/document/d/1MbxPqhDV_F7YBrLEVjIIT-rdIMNIYT9H80p2qkj8f1s/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/9fee8aac-a17b-4f12-ae36-e0690248dff8" }, 
                  { id: 'mm44g', title: "Rickettsiae", gdoc: "https://docs.google.com/document/d/1kuc_IKA7qmH1ibiOFC4hJpo5-c7K8SvPaLiSxAF5gqA/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/141b0a18-9aff-4cbb-b34b-7328f475ee9f" }, 
                    //{ id: 'cp11', title: "My Brand New Topic", gdoc: "https://...", nlm: "..." },
                ]
              },
              {
                instructor: "Virology: Dr Chigo U.N.",
                topics: [
                  { id: 'mm45', title: "Introduction to Virology", gdoc: "https://docs.google.com/document/d/1tTF60Mw4OhTxzT3fKCHjCfj9VnkLYLGwK7nah95PoXg/edit", nlm: "https://notebooklm.google.com/notebook/186c873d-e8e4-4a70-bba4-93d78adfee23" },
                  { id: 'mm46', title: "Antiviral Chemotherapy", gdoc: "https://docs.google.com/document/d/1XEy-LkXTKDe3612Pyx_rdlLmnhYEckq5WueozwyaexM/edit", nlm: "https://notebooklm.google.com/notebook/6c36939d-9334-436f-92d2-801f6377b28e" },
                  // duplicate with mm2 { id: 'mm47', title: "Antimicrobial Drug Resistance", gdoc: "https://docs.google.com/document/d/1_a-04luhaOd7YB964F2xCzhQWhRAkHlmv_CBFlPLAiw/edit", nlm: "" },
                  { id: 'mm48', title: "Antimicrobial Agents and Chemotherapy", gdoc: "", nlm: "" },
                  // duplicate with mm4 { id: 'mm49', title: "Serological Diagnosis of Infections", gdoc: "https://docs.google.com/document/d/1HNYzB4kl4Lvg9fDIv11SrEqLYIAMj3oP-c9iM9hLB70/edit", nlm: "" },
                  { id: 'mm50', title: "Picornavirus", gdoc: "https://docs.google.com/document/d/1u4IbDdufgaX30RNiyeyLXHERv0Nef6lO8yjbKiqkDtM/edit", nlm: "https://notebooklm.google.com/notebook/9ebba629-9fd5-4516-815d-533512f145ee" },
                  { id: 'mm51', title: "Hepatitis Viruses (Hepatoviruses)", gdoc: "https://docs.google.com/document/d/1JO3bFwlbYiqj-XmVoR5IHiuaq7o-COP4NQSOp5SBmLU/edit", nlm: "https://notebooklm.google.com/notebook/b7389ce5-bc5d-445e-b82b-1a131662d9ac" },
                  { id: 'mm52', title: "Herpesviridae", gdoc: "https://docs.google.com/document/d/1T5uLy5lmkIzQvMLDUxOdCKdkqgaY48yyV9la7wDFHIo/edit", nlm: "https://notebooklm.google.com/notebook/e99818d1-a7fe-4ce2-94fc-fe07b3a98ee4" },
                  { id: 'mm53', title: "Rhabdoviridae", gdoc: "https://docs.google.com/document/d/1WMgACh9cfZz7vkGEZnX516xrPT9emn9RMzF5Gp4w_uM/edit", nlm: "https://notebooklm.google.com/notebook/bff388e5-a48f-4e09-bfc2-3b1c20bf1431" },
                  { id: 'mm54', title: "Prion Diseases", gdoc: "https://docs.google.com/document/d/18MjC4vVX-kDqauAcddHbBmvUO2U3GrkP9LPgn8q4j9o/edit", nlm: "https://notebooklm.google.com/notebook/552c17a9-8e66-4703-af46-0ae1517a023f" },
                  { id: 'mm55', title: "Myxoviridae", gdoc: "https://docs.google.com/document/d/1EWN64pPos3yJJvqkpKrY67WIZDM8k-c5TCCXQnbhp90/edit", nlm: "https://notebooklm.google.com/notebook/14fd5478-c08c-4398-8d29-110426eb0036" },
                  { id: 'mm56', title: "Togaviridae", gdoc: "", nlm: "" },
                  { id: 'mm57', title: "Tumours of Viral Origin", gdoc: "https://docs.google.com/document/d/11YSUuJ1ca_6EQeY1EMrfZgCNM-Tg-sue-UFPxEl2RX4/edit", nlm: "https://notebooklm.google.com/notebook/3ecee55e-e9b4-47b0-ba7f-c33c1c4e6b25" },
                  { id: 'mm58', title: "Microbes of Dental Importance", gdoc: "https://docs.google.com/document/d/1aZBX2cy2zfZWTrLvYJpP2FrRiYkXjbc5mXDYGzZsJJs/edit", nlm: "https://notebooklm.google.com/notebook/2d28755c-7ee3-48b7-a250-4e2ef9f82106" },
                  // duplicate with mm6 { id: 'mm59', title: "Opportunistic Infections (HIV/AIDS)", gdoc: "https://docs.google.com/document/d/1l1NA5XAZg2_q0sG3sGzmGjUgOQ0dIAX_Y9Em1YA-19M/edit", nlm: "" },
                  { id: 'mm60', title: "Viral Gastroenteritis", gdoc: "https://docs.google.com/document/d/16l9PCEDHSmV9awdSTxE6t5PKrxiZW0IV0j75RbWypJo/edit", nlm: "https://notebooklm.google.com/notebook/ed4967b2-4d05-47c7-91c6-b53a7b288b77" },
                  //duplicate with mm7 { id: 'mm61', title: "Control of Infectious Diseases", gdoc: "https://docs.google.com/document/d/1el21FrfI64YSQk5NbNTgqaGU8fPhF0I3dClTfMv5SBU/edit", nlm: "" },
                  { id: 'mm61a', title: "Retroviruses", gdoc: "https://docs.google.com/document/d/1YZ3BU9dFgSz30WgYo1jqyqkNsHUkEkvdo3pgBKx4vfQ/edit?usp=drivesdk", nlm: "https://notebooklm.google.com/notebook/fa002b5f-f246-4076-9ea8-76818ef90b11" },
                
                ]
              },
              {
                instructor: "Mycology: Prof. Akujobi",
                topics: [
                  { id: 'mm63', title: "Introduction to Mycology and Taxonomy", gdoc: "", nlm: "" },
                  { id: 'mm64', title: "Classification of Fungi and Fungal Diseases", gdoc: "https://docs.google.com/document/d/1PkieAE3VimJ8Zf4htMKgBbAz3-LwwO1pHRu-zRW-QR4/edit", nlm: "https://notebooklm.google.com/notebook/5b21b8ec-3a44-4f64-bfd9-87687c48b8f2" },
                  { id: 'mm65', title: "Superficial Mycoses", gdoc: "https://docs.google.com/document/d/1FL6h_GevDk7LZHd7DI7h0ZxcBKOm7aqOvWXxCSDZbiw/edit", nlm: "https://notebooklm.google.com/notebook/975d1918-4423-431e-8c32-b092932ccfa2" },
                  { id: 'mm66', title: "Cutaneous Mycoses - Dermatophytes", gdoc: "https://docs.google.com/document/d/1eXUrBLDEJ0ky92JxJcHZyOIAUHC9MI3TPZ2edGcgfRw/edit", nlm: "https://notebooklm.google.com/notebook/4c7b4acd-39da-4d56-90b4-4d39a6fc2eaf" },
                  { id: 'mm67', title: "Subcutaneous Mycoses - Mycetoma", gdoc: "https://docs.google.com/document/d/1C2R7dfF_8TQWnEiZ0HeWAvk6PV10ZjjuBoa3BbZIAt4/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/820c74f3-7bc2-4f86-a653-8034175ebcd6" },
                  { id: 'mm68', title: "Deep Mycoses", gdoc: "https://docs.google.com/document/d/1NLMHj0DCQvLiH9xxAF36kMWnNiMdPI68PhPSScjdltA/edit", nlm: "https://notebooklm.google.com/notebook/f9efa5f0-c17c-4218-a25b-e9a0503a8e0a" },
                  { id: 'mm68a', title: "CNS Infections", gdoc: "https://docs.google.com/document/d/1hxJrp8QxMwj5GpUaUPH_X8D1kZGjaH2h7hu-VZEpXSw/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/73993615-a2cd-49ad-9a52-879d97058eb5" },
                  { id: 'mm68b', title: "Anaerobic Bacteriology", gdoc: "https://docs.google.com/document/d/10R_e4wShmMViU4ZVSB8Q3KayM5qTLdn4JEvl1ooqlfQ/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/3c30078b-b650-4ed8-b1a9-283f5bb2a4b6" },
                  { id: 'mm68c', title: "Sepsis", gdoc: "https://docs.google.com/document/d/1l9mBV2c-QELrTcQcBDemgZfdSffET5-bujxhpfRRO4o/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/f419161c-cad5-48b2-989e-868d4f8b58cd" },
                  { id: 'mm68d', title: "Cardiac Infections", gdoc: "https://docs.google.com/document/d/1gbknvB3CfYAO65HOxywuK82PN7mnRZ72kEG5WUhZcDc/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/5ec9b2a9-55a3-423f-a5b1-ad7bf36697c0" },
                ]
              },
              {
                instructor: "Parasitology: Prof Amadi",
                topics: [
                  { id: 'mm69', title: "Intro to Medical Parasitology", gdoc: "", nlm: "" },
                  { id: 'mm70', title: "Learning Outcomes of Medical Microbiology/ Parasitology, Giardiasis", gdoc: "https://docs.google.com/document/d/193fyManjhS-kvtPaf9ANvphKUZQN50AIEUvuei6mfSI/edit?usp=sharing", nlm: "" },
                  { id: 'mm71', title: "Amoebiasis", gdoc: "", nlm: "" },
                ]
              }
            ]
          },
          {
            subject: "Pharmacology",
            icon: "Pill",
            color: "bg-purple-50 border-purple-200 text-purple-800",
            sections: [
                {
                instructor: "General Notes",
                topics: [
                  { id: 'ph-missing', title: "Missing Pharmacology Notes may be found here", gdoc: "https://docs.google.com/document/d/1nBKHJ9ynTQeNuT7oVA8oxxgZj-Px_68T_RIioPQYUrA/edit?usp=sharing" }
                ]
              },
              {
                instructor: "HOD Dr. P.U. Agasi",
                topics: [
                  { id: 'ph1', title: "Intro to Pharmacology", gdoc: "https://docs.google.com/document/d/1qCroISEmYbu2ASx6gQNkEUSMzyxVt36eYxcpnFqUWz8/edit?usp=sharing", nlm: "" },
                  { id: 'ph2', title: "Intro to Pharm 2: Plasma Protein Binding", gdoc: "https://docs.google.com/document/d/1dFju238yoozTWkx0OQ0YxyDvcxZYw20W6URVGtMsZew/edit?usp=sharing", nlm: "" },
                  { id: 'ph4', title: "Intro to Autonomic Pharmacology - (ANS 1)", gdoc: "https://docs.google.com/document/d/1qvVEY060eYBdR13rEwiBXqg2TPmyQkIy0bJvOFfj6zQ/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/7934d0fe-66e5-4687-9621-3f17e557a722" },
                  { id: 'ph5', title: "Cholinoceptor-Activating & Cholinesterase-Inhibiting Drugs - (ANS 2)", gdoc: "https://docs.google.com/document/d/160tD8Ic88r2CjiHXUoD3g_2kM4X2ahkYovgvRV47f9s/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/eda5de4a-01a0-4324-b862-33973314e95d" },
                  { id: 'ph6', title: "Cholinoceptor-blocking drugs - (ANS 3)", gdoc: "https://docs.google.com/document/d/10vZCTtKtzfn5HuOdvL3AqU6W8uY2uNqbRjaxHBvLxGg/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/5631cc18-d3bf-48b5-a813-d676623d11b7" },
                  { id: 'ph8', title: "Autocoid Hormones", gdoc: "https://docs.google.com/document/d/1-CVFey5yLm6fSfSzqMkbHF0uDDIRasTiGN6Rcjc3X5k/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/de743c62-40ef-42cc-83bf-63722d7d4d06" },
                  { id: 'ph9', title: "Toxicology & Toxicological Dose Descriptors", gdoc: "https://docs.google.com/document/d/14jb3mExvPkUNDUSg5ycvuC9ESt9g-W5sbGXbhnTqQjg/edit", nlm: "https://notebooklm.google.com/notebook/85b3b058-41e1-453c-b794-a94f813c43ce" },
                  { id: 'ph10', title: "Cancer Chemotheraphy", gdoc: "https://docs.google.com/document/d/117ZUvtlQe4fgwFUlbXErokGxyaPFs97VGpikhO1tyuE/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/22307468-383f-4fe8-bbdb-78e80f257447" },
                  
                ]
              },
              {
                instructor: "Prof. L.U. Amazu",
                topics: [
                 
                  { id: 'ph12', title: "New Drug Development: Drug Discovery", gdoc: "https://docs.google.com/document/d/1uoabF1DCN6b4Tq_lLu6T9-0BBePWZ9I1OF1_kQYwTrA/edit?usp=sharing", nlm: "" },
                  { id: 'ph13', title: "Adverse drug effects", gdoc: "https://docs.google.com/document/d/1UQfTXPE2XFCX3KZOLpToaL5MSLO-SmWZ8JYnywMX_0c/edit?usp=sharing", nlm: "" },
                  { id: 'ph14', title: "Drug Interactions", gdoc: "https://docs.google.com/document/d/1-UZ-i8NOlzkYaxBDOyf9aPZXHCOR6Rtjjfxu4gEvVCQ/edit?usp=sharing", nlm: "" },
                  { id: 'ph15', title: "Adrenoceptor Agonists & Sympathomimetic Drugs - (ANS 4)", gdoc: "https://docs.google.com/document/d/17g8vrhiVhd0AcK0CPg3Rdnq1qrKOgncawfcLwGkFCEg/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/306d7438-79ca-4da4-9654-6033f4199ea7" },
                  { id: 'ph15a', title: "Adrenoceptor Antagonists - (ANS 5)", gdoc: "https://docs.google.com/document/d/19ciSjlTt-4IfPT9EJqyT4ZyPl0M2e3eu2RxpRV7-lQ8/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/6016b073-13a1-4f97-b52a-33ad5665c3df" },
                  { id: 'ph16', title: "CVS: Anti-diuretics, Antihypertensives", gdoc: "", nlm: "" },
                  { id: 'ph17', title: "CVS Contd.: Antihypertensive, Antianginal, Antiarrhythmic drugs", gdoc: "", nlm: "" },
                  { id: 'ph18', title: "CVS Contd.: Antiarrhythmic drugs, Drugs used in Heart Failure", gdoc: "", nlm: "" },
                  { id: 'ph19', title: "Antiviral Agents", gdoc: "https://docs.google.com/document/d/13JWOGJyEcnSlomDYbB84r8iroXy7f6a0nq0Tg2kRANs/edit?usp=drivesdk", nlm: "https://notebooklm.google.com/notebook/63c8756c-ab2c-4ac2-b5ac-08ba785705e0" },
                  { id: 'ph20', title: "Drugs of Abuse", gdoc: "https://docs.google.com/document/d/1hq-7MOPRXHI4-BiGpLzW1LrNmxg0qyNSAeEOcm-XK9c/edit?usp=sharing", nlm: "" },
                  { id: 'ph21', title: "Autacoids & Ergots Alkaloids", gdoc: "https://docs.google.com/document/d/1AyLuQAbPy_SKGJuacRFNfiCo_ZaAOLyTJw5xLEsFD0M/edit", nlm: "" },
                  { id: 'ph22', title: "Adrenocorticoids", gdoc: "https://docs.google.com/document/d/12TJn9VzvONqu6XC-zVsxoGOWTeQZNoXxHTrSHodQEIQ/edit", nlm: "" },
                  { id: 'ph23', title: "Corticosteroids cont'd: Mechanism of Action of Glucocorticoids", gdoc: "", nlm: "" },
                ]
              },
              {
                instructor: "Dr. Anele Donatus Onyebuchi",
                topics: [
                  { id: 'ph24', title: "Anaesthesia", gdoc: "https://docs.google.com/document/d/1Xduseg6RCplYn23NbT34QFZlZ0TEjJKgjNiFkRDoYo0/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/68328ea6-7c4d-47ae-a518-fa4ea311d97d" },
                  { id: 'ph25', title: "NSAID's", gdoc: "", nlm: "" },
                  { id: 'ph26', title: "Pharmacodynamic Concepts", gdoc: "https://docs.google.com/document/d/1z-32_FCLUUtyMShm1UcZHLcIWM_iA_nWe1gJ_MGEjyE/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/98c3923b-baa3-4d23-a932-7264af385993" },
                  { id: 'ph27', title: "Antihypertensives", gdoc: "https://docs.google.com/document/d/1A5qtwlxnEJwqP2Ky3oIuIT31L3V8MVEq3LZZeZ17EJk/edit?usp=sharing", nlm: "" },
                  { id: 'ph28', title: "Anti anginal drugs", gdoc: "https://docs.google.com/document/d/1SLW82aXxAZRvcdtRZdGwEPBo14NhAJFkykWGy4XBv-I/edit?usp=sharing", nlm: "" },
                  { id: 'ph29', title: "Drug Treatment of Joint Diseases - Gout and Arthritis", gdoc: "", nlm: "" },
                  { id: 'ph30', title: "Drugs Used in Heart Failure", gdoc: "https://docs.google.com/document/d/1ELVzWjG9pRlCCRAe6FQ2V9K9EYZoJ2bkHw2nxBHqU1Q/edit?usp=sharing", nlm: "" },
                  { id: 'ph31', title: "Antiarrhythmic Agents", gdoc: "https://docs.google.com/document/d/17gGb4J33j-exvtw88T1diGgdAR1TYhqyAcS-cPtAUQo/edit?usp=sharing", nlm: "" },
                  { id: 'ph32', title: "Prescription Writing", gdoc: "https://docs.google.com/document/d/1h5LQo-rC7qE98j1Y4Wpa3_IeEKJZlgSowxHDzLjqUCw/edit?usp=sharing", nlm: "" },
                  { id: 'ph33', title: "Insulin and Oral Hypoglycemics", gdoc: "https://docs.google.com/document/d/1x_LD1LEowvoiXz7JjzehJsPdTMLsrUvzEmSJl6HD-8E/edit?usp=sharing", nlm: "" },
                  { id: 'ph34', title: "Vaccines: Pharmacology and Immunology", gdoc: "https://docs.google.com/document/d/1n-71SkcrNvw032birAOuX46YncwE14dCqZTNRd1C8WM/edit?usp=sharing", nlm: "" },
                  { id: 'ph35', title: "Estrogens/Progestins/Contraceptives", gdoc: "https://docs.google.com/document/d/10yd6fAW3vHC28dWtnVnLffr_E6dqMsb4XvEiq9_7Vf8/edit?usp=sharing", nlm: "" },
                  { id: 'ph36', title: "Chelators", gdoc: "https://docs.google.com/document/d/12J3KrHd2tmtj4JcYvdxtimqqnlMu_6B9z_9n7gNjbjo/edit?usp=sharing", nlm: "" },
                  { id: 'ph37', title: "Antimalarials", gdoc: "", nlm: "" },
                  { id: 'ph38', title: "Anti - Parasitic Agents", gdoc: "https://docs.google.com/document/d/1vZF_8W2n0O-7eQEyzlA3cBBo8lkjfvHRspHMr9-AkE4/edit", nlm: "" },
                  { id: 'ph39', title: "Immunopharmacology", gdoc: "https://docs.google.com/document/d/1RuwVLgAvKaLGpZnh5cVWvpzNlRjOrn9xudLxZKBecw0/edit", nlm: "" },
                  { id: 'ph40', title: "Anti - Parkinson Drugs", gdoc: "https://docs.google.com/document/d/1jP0vlmaiSCpqQOD6YtAgm29bftVbelzqfCXyfGziTGA/edit", nlm: "" },
                  { id: 'ph41', title: "Pharmacokinetics", gdoc: "https://docs.google.com/document/d/17yKM3ceJcOaFadP9ZRuRODIQfz9R1q7SCCJp4Fq2bMs/edit", nlm: "https://notebooklm.google.com/notebook/bb9afac9-7013-4104-b411-4ee93a7116c0" },
                  { id: 'ph41a', title: "Tocolytics & Oxytoics", gdoc: "https://docs.google.com/document/d/1v_lVDuge6An7MB2Xho8Cab63jVU3rQcXG98_NFMu8eE/edit?usp=drivesdk", nlm: "https://notebooklm.google.com/notebook/726aba3b-7e33-466f-88eb-bfe13521f93c?authuser=3" },
                  { id: 'ph41b', title: "Drugs of Abuse", gdoc: "https://docs.google.com/document/d/1UtImkh52sLaPrQmxe0nsNxCpJKBj8w9CxCIHt5x3pIU/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/bb9cc387-37bf-4a8f-ba4e-a0ea5c5ed217" },
                ]
              },
              {
                instructor: "Lecturer Emmanuel Emeka Ubah",
                topics: [
                  { id: 'ph42', title: "Principles of Antimicrobial Therapy", gdoc: "https://docs.google.com/document/d/1z1Der-n6RCXJfAnMJnFl5Tnch3DuT7V_m0sM0gyTMOw/edit?usp=sharing", nlm: "" },
                  { id: 'ph45', title: "Beta-Lactams and other Cell wall Inibitors", gdoc: "https://docs.google.com/document/d/1-MAI7CZcXGHx8V9PMEjXid3HL-ZxtrMibCtGV0asDAg/edit", nlm: "" },
                  { id: 'ph48', title: "Tetracyclines", gdoc: "", nlm: "" },
                  { id: 'ph49', title: "Chloramphenicol, Aminoglycosides", gdoc: "", nlm: "" },
                  { id: 'ph50', title: "Macrolides, Fluoroquinolones", gdoc: "", nlm: "" },
                  { id: 'ph51', title: "Drugs Used in Asthma", gdoc: "https://docs.google.com/document/d/1uvd7UHAc9crBhKobvgelRX_O0vq8IHYhjJ8Sk0XaUSU/edit", nlm: "" },
                  { id: 'ph53', title: "Antitussives and Cough Suppressants", gdoc: "https://docs.google.com/document/d/16X__M-PEcOKx6ofqCH-A2B0nNO96ZlQEwuoKDU9nvFs/edit?usp=sharing", nlm: "" },
                  { id: 'ph54', title: "COPD, Allergic Rhinitis, Antihistamines", gdoc: "https://docs.google.com/document/d/1BeIUhjtjhtq1gmMyLqtl2q1qzFD4_EXEgLW4RxTf7rI/edit?usp=sharing", nlm: "" },
                  { id: 'ph55', title: "Respiratory Stimulants", gdoc: "https://docs.google.com/document/d/1gvWRweMwgKhmn7szIw1HUygpJ0rgLwmvhr-_KBUc6nk/edit?usp=sharing", nlm: "" },
                  { id: 'ph56', title: "Oxygen Therapy", gdoc: "https://docs.google.com/document/d/1D-Q7L5Pkuq6lYkUVyE3infC21KbQS0BN5xtM2n-SDv4/edit", nlm: "" },
                  { id: 'ph57', title: "Alpha Adrenergic Agonists", gdoc: "", nlm: "" },
                  { id: 'ph58', title: "Intranasal Cromolyn", gdoc: "", nlm: "" },
                  { id: 'ph59', title: "Anaemia Drug Therapy", gdoc: "https://docs.google.com/document/d/1Ww61e8A3yV_kk8p1Cbn2W-_nYNyplXTw_JIQBMXpdVM/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/c96b46db-65a0-4808-a01c-c6bafd0a9a5f?authuser=3" },
                  { id: 'ph61', title: "Vitamins", gdoc: "https://docs.google.com/document/d/1lEfL62x7BG7mt7H5f-vrunnV4xM_9oJwPC5SkYqw5v4/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/b8fcafe5-f175-4fd7-8ac2-f4d340a37c9" },
                  { id: 'ph61a', title: "Alzheimer's", gdoc: "https://docs.google.com/document/d/154s_moYPe5JHbrfzLBUbADgy1U0cyv4eFdql3Ip1UqU/edit?usp=drivesdk", nlm: "https://notebooklm.google.com/notebook/96321c66-e909-48ea-ad32-67c19b6e4297?authuser=3" },
                  { id: 'ph61b', title: "Antidepressants", gdoc: "https://docs.google.com/document/d/19F9izPcsM2gJzWqVsEHmV3jaHxvG3ep1jWOLj71pOEU/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/57b987ec-62f0-4458-bb28-3f80075ef625" },
                  { id: 'ph61c', title: "Opioids", gdoc: "https://docs.google.com/document/d/1fBPaaj0OR_kfVmYpMFSr7YyiE1RjD_rA5tq6ji_4iPM/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/7d9ffaef-93d0-4f8f-abdd-e7dd4095e84e" },
                ]
              },
              {
                instructor: "Mr. Eric O. Irinmwinuwa",
                topics: [
                  { id: 'ph62', title: "Endocrine Pharmacology", gdoc: "", nlm: "" },
                  { id: 'ph63', title: "Immunopharmacology", gdoc: "https://docs.google.com/document/d/16HOJPuxKY_ZUK8mHtDLH434vzmSy-0odqsb6SQgBeVA/edit?usp=sharing", nlm: "" },
                  { id: 'ph66', title: "Minerals", gdoc: "https://docs.google.com/document/d/1zSewvCAJEB_fsnI4nRm2n4MGvoaVGPmfjPG2xM05ENc/edit?usp=sharing", nlm: "" },
                  { id: 'ph67', title: "Agents that affect Calcification", gdoc: "", nlm: "" },
                  { id: 'ph68', title: "Anti-coagulants, Fibrinolytics, Antifibrinolytics and Antiplatelet Agents", gdoc: "https://docs.google.com/document/d/1aHsvb6BgzL5vRRBvKkHma2NqVLb-Df30OZLMPJlIQFI/edit", nlm: "" },
                  { id: 'ph73', title: "Lipid Lowering Agents", gdoc: "", nlm: "" },
                  { id: 'ph73a', title: "Endocrine Drugs", gdoc: "", nlm: "" },
                  { id: 'ph73b', title: "Androgens & Steriods", gdoc: "", nlm: "" },
                ]
              },
              {
                instructor: "Mrs Ezinne C. Okoroafor",
                topics: [
                  { id: 'ph74', title: "Antifungal Agents", gdoc: "https://docs.google.com/document/d/1tredmXB38sFNCmeKsag5A1kZc_lRJ-jo8oPcZ9AJklY/edit?usp=sharing", nlm: "" },
                  { id: 'ph75', title: "Drug Treatment of Malaria", gdoc: "https://docs.google.com/document/d/1K2yg2K8lPOdacTBvjb96kNSA1Jnd8T8X7LBgSK_nrYw/edit?usp=sharing", nlm: "" },
                  { id: 'ph76', title: "Amoebiasis", gdoc: "", nlm: "" },
                  { id: 'ph77', title: "Chemotherapy of Tuberculosis & Leprosy", gdoc: "https://docs.google.com/document/d/1Bhx4m3Vnl1_JkJfLRkIuuTNm8FAXo5O9W_WM2NyEv6c/edit?usp=sharing", nlm: "" },
                  { id: 'ph80', title: "Drugs active on skin and mucous membranes", gdoc: "https://docs.google.com/document/d/1SnaF00ottANS4DKg66Ftnjk-19sNU85-HizEey3439A/edit", nlm: "" },
                  { id: 'ph81', title: "GIT Pharmacology", gdoc: "https://docs.google.com/document/d/1lQwmgxmfMWVDNX9JkV3nC8rrWsL0k-pQNGRQrGWheag/edit", nlm: "" },
                  { id: 'ph83', title: "Renal Systemic Pharmacology", gdoc: "https://docs.google.com/document/d/1M5QsCOafxhFDijqt9iThH5ymcFDX1uipINaHGCMW_VQ/edit", nlm: "" },
                  { id: 'ph84', title: "CNS Pharmacology: CNS Stimulants, Psychomimetic Agents, Anti-epileptic Drugs", gdoc: "https://docs.google.com/document/d/1qYJLPxzNyG2xT4G5dVwz9a8SSw9YXG99_sTGiReDG28/edit?usp=sharing", nlm: "https://notebooklm.google.com/notebook/3b8c3f04-4eca-4554-a3b6-d11d35c876f1" },
                ]
              }
            ]
          }
];

// CHANGELOG DATA
const changelogData = [
    {
        version: "May 25, 2026",
        changes: [
            "Added NotebookLM links for Pathology of Tuberculosis.",
            "Updated Google Docs for CNS I."
        ]
    },
    {
        version: "May 20, 2026",
        changes: [
            "Launched the Medical Microbiology section.",
            "Fixed broken links in Chemical Pathology."
        ]
    }
];
