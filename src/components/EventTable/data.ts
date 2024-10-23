interface TableI {
  eventName: string;
  date: string;
  speaker: string;
  status: string;
  statusColor: string;
}

export const tableData: TableI[] = [
  {
    eventName: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
    statusColor: "text-primary",
  },
  {
    eventName: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
    statusColor: "text-primary",
  },
  {
    eventName: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
    statusColor: "text-primary",
  },
  {
    eventName: "Safari Tech",
    date: "2024-09-22",
    speaker: "Jim Gordon",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Manchester United",
    date: "2044-09-30",
    speaker: "Marcus Rashford",
    status: "In Progress",
    statusColor: "text-primary",
  },
  {
    eventName: "Erling Project",
    date: "2024-09-30",
    speaker: "John Stones",
    status: "In Progress",
    statusColor: "text-primary",
  },
  {
    eventName: "Amad Garnacho Bruno",
    date: "2024-09-30",
    speaker: "Erik Ten Hag",
    status: "Completed",
    statusColor: "text-green",
  },
  {
    eventName: "Dev fest lagos",
    date: "2024-09-30",
    speaker: "Adora Nwodo",
    status: "In Progress",
    statusColor: "text-primary",
  },
  {
    eventName: "LemFi project drive",
    date: "2024-09-30",
    speaker: "Kevin Adams",
    status: "Completed",
    statusColor: "text-green",
  },
];

interface SelectI {
  key: string;
  label: string;
}

export const dateArry: SelectI[] = [
  { key: "2024-10-15", label: "2024-10-15" },
  { key: "2024-11-05", label: "2024-11-05" },
  { key: "2024-12-01", label: "2024-12-01" },
  { key: "2024-10-25", label: "2024-10-25" },
  { key: "2024-11-12", label: "2024-11-12" },
  { key: "2024-09-28", label: "2024-09-28" },
  { key: "2024-10-10", label: "2024-10-10" },
];

export const statusArry: SelectI[] = [
  { key: "inProgress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];


export const nameArry: SelectI[] = [
    { key: "Jane Doe", label: "Jane Doe" },
    { key: "John Lee", label: "John Lee" },
    { key: "Rachel Moore", label: "Rachel Moore" },
    { key: "Kevin Adams", label: "Kevin Adams" },
    { key: "Emily Zhang", label: "Emily Zhang" },

  ];
  
  export const sortArry: SelectI[] = [
    { key: "most recent", label: "Most Recent" },
    { key: "last week", label: "Last Week" },
    { key: "last month", label: "Last Month" }

  ];