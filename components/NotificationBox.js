import React, { useState } from "react";
import { Modal } from "react-native";
import InfoNotification from "./InfoNotification";
import ErrorNotification from "./ErrorNotification";

export default function NotificationBox({
  visibility,
  VisibilityHandler,
  content,
}) {
  /** Warunkowe otwieranie jednego z powiadomień (Błędu/ Informacji)  w obiekcie typu Modal */
  return (
    <Modal visible={visibility} transparent={true} animationType="fade">
      {!content.error && (
        <InfoNotification
          VisibilityHandler={VisibilityHandler}
          message={content.message}
        />
      )}
      {content.error && (
        <ErrorNotification
          VisibilityHandler={VisibilityHandler}
          message={JSON.stringify(content.message)}
        />
      )}
    </Modal>
  );
}
