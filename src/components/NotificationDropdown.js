import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import { FaUserPlus, FaExclamationTriangle, FaFileInvoice } from 'react-icons/fa';

function NotificationDropdown() {
  const notifications = [
    {
      icon: <FaUserPlus className="text-primary" />,
      message: "New user registered",
      time: "2m ago",
    },
    {
      icon: <FaExclamationTriangle className="text-warning" />,
      message: "Inventory low alert",
      time: "10m ago",
    },
    {
      icon: <FaFileInvoice className="text-success" />,
      message: "Finance report ready",
      time: "1h ago",
    }
  ];

  return (
    <ListGroup variant="flush" className="p-2">
      {notifications.map((note, idx) => (
        <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            {note.icon}
            <span>{note.message}</span>
          </div>
          {note.image ? (
            <Image src={note.image} roundedCircle width={30} height={30} />
          ) : (
            <small className="text-muted">{note.time}</small>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default NotificationDropdown;