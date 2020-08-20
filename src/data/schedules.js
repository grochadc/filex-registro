const allSchedules = [
  [
    {
      group: "E1-1",
      teacher: "Sergio Martinez",
      time: "7:00 - 8:00"
    },
    {
      group: "E1-2",
      teacher: "Sergio Martinez",
      time: "8:00 - 9:00"
    },
    {
      group: "E1-3",
      teacher: "Sergio Martinez",
      time: "9:00 - 10:00"
    },
    {
      group: "E1-4",
      teacher: "Erika Romero",
      time: "10:00 - 11:00"
    },
    {
      group: "E1-5",
      teacher: "Sergio Martinez",
      time: "11:00 - 12:00"
    },
    {
      group: "E1-6",
      teacher: "Sergio Martinez",
      time: "12:00 - 13:00"
    },
    {
      group: "E1-7",
      teacher: "Sergio Martinez",
      time: "13:00 - 14:00"
    },
    {
      group: "E1-8",
      teacher: "Erika Romero",
      time: "14:00 - 15:00"
    },
    {
      group: "E1-9",
      teacher: "Erika Romero",
      time: "15:00 - 16:00"
    },
    {
      group: "E1-10",
      teacher: "Sergio Martinez",
      time: "16:00 - 17:00"
    },
    {
      group: "E1-11",
      teacher: "Sergio Martinez",
      time: "17:00 - 18:00"
    },
    { group: "E1-12", teacher: "Sergio Martinez", time: "18:00 - 19:00" }
  ],
  [
    {
      group: "E2-1",
      teacher: "Erika Romero",
      time: "7:00 - 8:00"
    },
    {
      group: "E2-2",
      teacher: "Jessica Zepeda",
      time: "8:00 - 9:00"
    },
    {
      group: "E2-3",
      teacher: "Jessica Zepeda",
      time: "9:00 - 10:00"
    },
    {
      group: "E2-4",
      teacher: "Jessica Zepeda",
      time: "10:00 - 11:00"
    },
    {
      group: "E2-5",
      teacher: "Erika Romero",
      time: "11:00 - 12:00"
    },
    {
      group: "E2-6",
      teacher: "Jessica Zepeda",
      time: "12:00 - 13:00"
    },
    {
      group: "E2-7",
      teacher: "Erika Romero",
      time: "12:00 - 13:00"
    },
    {
      group: "E2-8",
      teacher: "Erika Romero",
      time: "13:00 - 14:00"
    },
    {
      group: "E2-9",
      teacher: "Jessica Zepeda",
      time: "13:00 - 14:00"
    },
    {
      group: "E2-10",
      teacher: "Jessica Zepeda",
      time: "14:00 - 15:00"
    },
    {
      group: "E2-11",
      teacher: "Jiselaine Arias",
      time: "15:00 - 16:00"
    },
    {
      group: "E2-12",
      teacher: "Jessica Zepeda",
      time: "16:00 - 17:00"
    },
    {
      group: "E2-13",
      teacher: "Jessica Zepeda",
      time: "17:00 - 18:00"
    },
    { group: "E2-14", teacher: "Jessica Zepeda", time: "18:00 - 19:00" }
  ],
  [
    { group: "E3-1", teacher: "Carlos Martinez", time: "7:00 - 8:00" },
    { group: "E3-2", teacher: "Carlos Martinez", time: "8:00 - 9:00" },
    { group: "E3-3", teacher: "Carlos Martinez", time: "9:00 - 10:00" },
    { group: "E3-4", teacher: "Alondra Sanchez", time: "10:00 - 11:00" },
    { group: "E3-5", teacher: "Carlos Martinez", time: "11:00 - 12:00" },
    { group: "E3-6", teacher: "Alondra Sanchez", time: "12:00 - 13:00" },
    { group: "E3-7", teacher: "Carlos Martinez", time: "13:00 - 14:00" },
    { group: "E3-8", teacher: "Carlos Martinez", time: "14:00 - 15:00" },
    { group: "E3-9", teacher: "Alondra Sanchez", time: "15:00 - 16:00" },
    { group: "E3-10", teacher: "Alondra Sanchez", time: "16:00 - 17:00" }
  ],
  [
    { group: "E4-1", teacher: "Gonzalo Rocha", time: "7:00 - 8:00" },
    { group: "E4-2", teacher: "Gonzalo Rocha", time: "8:00 - 9:00" },
    { group: "E4-3", teacher: "Gonzalo Rocha", time: "9:00 - 10:00" },
    { group: "E4-4", teacher: "Gonzalo Rocha", time: "10:00 - 11:00" },
    { group: "E4-5", teacher: "Alondra Sanchez", time: "11:00 - 12:00" },
    { group: "E4-6", teacher: "Gonzalo Rocha", time: "12:00 - 12:00" },
    { group: "E4-7", teacher: "Gonzalo Rocha", time: "13:00 - 13:00" },
    { group: "E4-8", teacher: "Alondra Sanchez", time: "14:00 - 15:00" }
  ],
  [
    { group: "E5-1", teacher: "Gissel Cerrillos", time: "9:00 - 10:00" },
    { group: "E5-2", teacher: "Gissel Cerrillos", time: "10:00 - 11:00" },
    { group: "E5-3", teacher: "Gissel Cerrillos", time: "11:00 - 12:00" },
    { group: "E5-4", teacher: "Gissel Cerrillos", time: "13:00 - 14:00" },
    { group: "E5-5", teacher: "Gissel Cerrillos", time: "14:00 - 15:00" },
    { group: "E5-6", teacher: "Gissel Cerrillos", time: "15:00 - 16:00" }
  ],
  [
    { group: "E6-1", teacher: "Jiselaine Arias", time: "9:00 - 10:00" },
    { group: "E6-2", teacher: "Jiselaine Arias", time: "10:00 - 11:00" },
    { group: "E6-3", teacher: "Jiselaine Arias", time: "12:00 - 13:00" },
    { group: "E6-4", teacher: "Jiselaine Arias", time: "13:00 - 14:00" },
    { group: "E6-5", teacher: "Jiselaine Arias", time: "14:00 - 15:00" }
  ]
];

export default allSchedules;
