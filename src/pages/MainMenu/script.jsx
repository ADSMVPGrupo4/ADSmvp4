import AdminArea from "../../components/AdminArea/script";
import Footer from "../../components/Footer/script";
import Header from "../../components/Header/script";
import UpdateEvent from "../../components/UpdateEvent/script";
import CreateEvent from "../../components/CreateEvent/script";
import EventList from "../../components/EventsList/script";
import Login from "../../components/Login/script";
import Contact from "../../components/Contact/script";

const MainMenu = ({
  options,
  setOptions,
  events,
  setEvents,
  adminStatus,
  setAdminStatus,
  userList,
}) => {
  return (
    <>
      <Header setOptions={setOptions} adminStatus={adminStatus} />
      <EventList options={options} events={events} setEvents={setEvents} />
      <Contact options={options} setOptions={setOptions} />

      <AdminArea
        options={options}
        setOptions={setOptions}
        adminStatus={adminStatus}
        events={events}
        setEvents={setEvents}
      />
      <Login
        options={options}
        setOptions={setOptions}
        userList={userList}
        adminStatus={adminStatus}
        setAdminStatus={setAdminStatus}
      />

      <UpdateEvent
        options={options}
        setOptions={setOptions}
        events={events}
        setEvents={setEvents}
      />
      <CreateEvent
        options={options}
        setOptions={setOptions}
        events={events}
        setEvents={setEvents}
      />

      <Footer />
    </>
  );
};

export default MainMenu;
