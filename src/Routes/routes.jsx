import CeoDashboard from "../Components/Ceo-Dashboard/CeoDashboard";
import AttendanceCal from "../Components/Ceo-Dashboard/componets/Attendance/AttaendanceCal";
import Attendance from "../Components/Ceo-Dashboard/componets/Attendance/Attendance";
import ClientCenter from "../Components/Ceo-Dashboard/componets/ClientCenter/ClientCenter";
import Finance from "../Components/Ceo-Dashboard/componets/Finance/Finance";
import GroupView from "../Components/Ceo-Dashboard/componets/Group/components/GroupView";
import Group from "../Components/Ceo-Dashboard/componets/Group/Group";
import GroupArchive from "../Components/Ceo-Dashboard/componets/Group/GroupArchive";
import LeadCenter from "../Components/Ceo-Dashboard/componets/LeadCenter/LeadCenter";
import Payment from "../Components/Ceo-Dashboard/componets/Payment/Payment";
import Settings from "../Components/Ceo-Dashboard/componets/Settings/Settings";
import Sms from "../Components/Ceo-Dashboard/componets/SMS/Sms";
import ArchiveStudents from "../Components/Ceo-Dashboard/componets/StudentCenter/ArchiveStudents";
import StudentPayement from "../Components/Ceo-Dashboard/componets/StudentCenter/component/StudentPayment";
import StudentView from "../Components/Ceo-Dashboard/componets/StudentCenter/component/StudentView";
import Student from "../Components/Ceo-Dashboard/componets/StudentCenter/Student";
import SubjectTeacher from "../Components/Ceo-Dashboard/componets/Subjects/components/SubjectTeacher";
import SubjectView from "../Components/Ceo-Dashboard/componets/Subjects/components/SubjectView";
import Subjects from "../Components/Ceo-Dashboard/componets/Subjects/Subjects";
import TeacherView from "../Components/Ceo-Dashboard/componets/Teacher/components/TeacherView";
import Teacher from "../Components/Ceo-Dashboard/componets/Teacher/Teacher";
import CenterStudy from "../Components/SuperCeo-Dashboard/CenterStudy/CenterStudy";
import FinanceCeo from "../Components/SuperCeo-Dashboard/FinanceCeo/FinanceCeo";
import RatesCenter from "../Components/SuperCeo-Dashboard/RatesCenter/RatesCenter";
import SuperCeoDashboard from "../Components/SuperCeo-Dashboard/SuperCeo-Dashboard";
import TeacherStudents from "../Components/Teacher-Dashboard/components/Groups/componets/TeacherStudents/TeacherStudents";
import TeacherGroups from "../Components/Teacher-Dashboard/components/Groups/TeacherGroups";
import TeacherDashboard from "../Components/Teacher-Dashboard/TeacherDashboar";

export const routes = [
  {
    name: 'SuperCeo-Dashboard',
    path: '/Super-admin/dashboard',
    component: <SuperCeoDashboard />
  },
  {
    name: 'SuperCeo-Study-Center',
    path: '/Super-admin/Study-center',
    component: <CenterStudy />
  },
   {
    name: 'SuperCeo-Tarif-Center',
    path: '/Super-admin/rates-center',
    component: <RatesCenter />
  },
  {
    name: 'SuperCeo-Binance-Center',
    path: '/Super-admin/finance-center',
    component: <FinanceCeo />
  },
  {
    name: "Ceo-Dashboard",
    path: "/",
    component: <CeoDashboard />,
  },
    {
    name: "Teacher-Dashboard",
    path: "/Teacher/dashboard",
    component: <TeacherDashboard />,
  },
   {
    name: "Teacher-Groups",
    path: "/Teacher/teacher-groups",
    component: <TeacherGroups />,
  },
     {
    name: "Teacher-Person",
    path: "/Teacher/groups/person/:ID",
    component: <TeacherStudents />,
  },


  
  {
    name: "LeadCenter",
    path: "/lead-center",
    component: <LeadCenter />,
  },
  {
    name: "Client-center",
    path: "/client-center",
    component: <ClientCenter />,
  },
  {
    name: "Student-center",
    path: "/student",
    component: <Student />,
  },
  {
    name: "Student-center",
    path: "/student/:ID",
    component: <StudentView />,
  },
  {
    name: "Student-center",
    path: "/studentpayment/:ID",
    component: <StudentPayement />,
  },
  {
    name: "ArchiveStudent-center",
    path: "/archiveStudents",
    component: <ArchiveStudents />,
  },
  {
    name: "Group",
    path: "/groups",
    component: <Group />,
  },
    {
    name: "Group",
    path: "/groupArchive",
    component: <GroupArchive />,
  },
  {
    name: "Group",
    path: "/groups/:ID",
    component: <GroupView />,
  },
  {
    name: "Teacher",
    path: "/teacher",
    component: <Teacher />,
  },
  {
    name: "Teacher",
    path: "/teacher/:ID",
    component: <TeacherView />,
  },
  {
    name: "Subjects",
    path: "/subjects",
    component: <Subjects />,
  },
  {
    name: "Subjects",
    path: "/subjects/:ID",
    component: <SubjectView />,
  },
  {
    name: "Subjects",
    path: "/subjects/:ID/techers",
    component: <SubjectTeacher />,
  },
  {
    name: "Attandance",
    path: "/attendance",
    component: <Attendance />,
  },
  {
    name: "Attandance",
    path: "/attendanceCal",
    component: <AttendanceCal />,
  },
  {
    name: "Finance",
    path: "/finance",
    component: <Finance />,
  },
  {
    name: "Payment",
    path: "/mypayment",
    component: <Payment />,
  },
  {
    name: "sms",
    path: "/sms-xabar",
    component: <Sms />,
  },
  {
    name: "set",
    path: "/sozlamalar",
    component: <Settings />,
  },



]