import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props sould be in the state", () => {
      const component = create(<ProfileStatus status="it-kamasutra" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-kamasutra");
    });
  });
  