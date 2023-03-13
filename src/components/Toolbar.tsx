import * as React from "react";
import {
  BiEraser,
  BiPencil,
  BiSquare,
  BiNavigation,
  BiUpArrowAlt,
  BiMove,
  BiRefresh,
} from "react-icons/bi";
import { machine } from "state/machine";
import styled from "stitches.config";

interface ToolbarProps {
  activeStates: string[];
  lastEvent: string;
}

const onToolSelect = (e: React.MouseEvent) => {
  machine.send("SELECTED_TOOL", { name: e.currentTarget.id });
};

const onReset = () => {
  machine.send("RESET");
};

export function Toolbar({ activeStates, lastEvent }: ToolbarProps) {
  return (
    <ToolbarContainer>
      <Tools>
        <SecondaryToolButton id="reset" onClick={onReset}>
          <Highlight>
            <BiRefresh size={20} />
          </Highlight>
        </SecondaryToolButton>
        <PrimaryTools>
          <PrimaryToolButton
            id="select"
            isActive={machine.isIn("select")}
            onClick={onToolSelect}
          >
            <Highlight>
              <BiNavigation size={20} />
            </Highlight>
          </PrimaryToolButton>
          <PrimaryToolButton
            id="eraser"
            isActive={machine.isIn("eraser")}
            onClick={onToolSelect}
          >
            <Highlight>
              <BiEraser size={20} />
            </Highlight>
          </PrimaryToolButton>
          <PrimaryToolButton
            id="pencil"
            isActive={machine.isIn("pencil")}
            onClick={onToolSelect}
          >
            <Highlight>
              <BiPencil size={20} />
            </Highlight>
          </PrimaryToolButton>
          <PrimaryToolButton
            id="box"
            isActive={machine.isIn("box")}
            onClick={onToolSelect}
          >
            <Highlight>
              <BiSquare size={20} />
            </Highlight>
          </PrimaryToolButton>
          <PrimaryToolButton
            id="arrow"
            isActive={machine.isIn("arrow")}
            onClick={onToolSelect}
          >
            <Highlight>
              <BiUpArrowAlt size={20} />
            </Highlight>
          </PrimaryToolButton>
        </PrimaryTools>
        <SecondaryToolButton
          id="move"
          isActive={machine.isIn("move")}
          onClick={onToolSelect}
        >
          <Highlight>
            <BiMove size={20} />
          </Highlight>
        </SecondaryToolButton>
      </Tools>
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  gridRowGap: "$5",
  position: "fixed",
  bottom: "0",
  width: "100%",
  zIndex: "100",
});

const PrimaryTools = styled("div", {
  display: "flex",
  width: "fit-content",
  borderRadius: "100px",
  border: "1px solid $border",
  overflow: "hidden",
  padding: "$2",
  justifySelf: "center",
  backgroundColor: "$background",
});

const Tools = styled("div", {
  display: "flex",
  justifySelf: "center",
  alignItems: "center",
});

const Highlight = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: 10,
  borderRadius: "100%",
  transition: "background-color .025s",
});

const PrimaryToolButton = styled("button", {
  cursor: "pointer",
  padding: 8,
  margin: 0,
  background: "none",
  backgroundColor: "none",
  border: "none",
  color: "$text",

  variants: {
    isActive: {
      true: {
        color: "$background",
        [`& > ${Highlight}`]: {
          backgroundColor: "$text",
        },
      },
      false: {
        [`&:hover > ${Highlight}`]: {
          backgroundColor: "$hover",
        },
        "&:active": {
          color: "$background",
        },
        [`&:active > ${Highlight}`]: {
          backgroundColor: "$text",
        },
      },
    },
  },
});
const SecondaryToolButton = styled("button", {
  cursor: "pointer",
  marginLeft: 5,
  marginRight: 5,
  display: "flex",
  width: "fit-content",
  borderRadius: "100px",
  border: "1px solid $border",
  overflow: "hidden",
  padding: "$2",
  justifySelf: "center",
  justifyItems: "Center",
  backgroundColor: "$background",
  color: "$text",
  height: "fit-content",
  variants: {
    isActive: {
      true: {
        color: "$background",
        [`& > ${Highlight}`]: {
          backgroundColor: "$text",
        },
      },
      false: {
        [`&:hover > ${Highlight}`]: {
          backgroundColor: "$hover",
        },
        "&:active": {
          color: "$background",
        },
        [`&:active > ${Highlight}`]: {
          backgroundColor: "$text",
        },
      },
    },
  },
});
