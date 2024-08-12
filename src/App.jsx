import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddBook from "./components/custom/add-book/AddBook";
import AddStudent from "./components/custom/add-student/AddStudent";
import Analytics from "./components/custom/analytics/Analytics";
import Chart from "./components/custom/chart/Chart";
import Dashboard from "./components/custom/dashboard/Dashboard";
import Header from "./components/custom/header/Header";
import IssueBook from "./components/custom/issue-book/IssueBook";
import ProtectedRoute from "./components/custom/protected-route/ProtectedRoute";
import ReturnBook from "./components/custom/return-book/ReturnBook";
import StudentList from "./components/custom/student-list/StudentList";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/studentsList" element={<StudentList />} />
          <Route path="/issueBook" element={<IssueBook />} />
          <Route path="/returnBook" element={<ReturnBook />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
