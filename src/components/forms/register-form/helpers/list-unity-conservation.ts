const listUnityConservation = [
   {
      value: "REVIS Arquipélago de Alcatrazes",
      label: "REVIS Arquipélago de Alcatrazes",
   },
   {
      value: "RESEX de Mandira",
      label: "RESEX de Mandira",
   },
   {
      value: "ESEC Tupiniquins",
      label: "ESEC Tupiniquins",
   },
   {
      value: "ARIE Ilha do Ameixal",
      label: "ARIE Ilha do Ameixal",
   },
   {
      value: "APA de Cananéia-Iguape-Peruíbe",
      label: "APA de Cananéia-Iguape-Peruíbe",
   },
].sort((a, b) => a.label.localeCompare(b.label))

export { listUnityConservation }