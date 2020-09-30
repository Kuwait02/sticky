import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StickyNote from "./StickyNote";

const Main = (props) => {
  const [stickys, setStickys] = React.useState([]);

  const onClickHandler = (e) => {
    console.log("E ::: ", e);
    const cords = { x: e.pageX, y: e.pageY };

    // (
    //   <div
    //     styles={{
    //       position: "absolute",
    //       left: e.screenX,
    //       top: e.screenY,
    //       width: 100,
    //       height: 100,
    //       backgroundColor: "#cc0000",
    //       zIndex: 10,
    //     }}
    //     key={e.screenX * Math.random()}
    //   />
    // );
    setStickys([...stickys, cords]);
  };

  React.useEffect(() => {
    console.log("Stickys", stickys);
  }, [stickys]);

  const items = stickys.map((cords) => {
    return (
      <StickyNote
        style={{
          position: "absolute",
          left: cords.x,
          top: cords.y,
        }}
        key={Math.random() * cords.x}
      />
    );
  });

  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        backgroundColor: "#f2f2f2",
        position: "relative",
      }}
      onClick={onClickHandler}
    >
      {items}
      {/* <Row>
        <Col style={styles.border}>
          <ReactStickies notes={state.notes} onChange={onChange} />
        </Col>
        <Col>
          <Row>
            <Col style={styles.border} xs={12}>
              2 of 1
            </Col>
            <Col style={styles.border} xs={12}>
              3 of 1
            </Col>
          </Row>
        </Col>
        <Col style={styles.border}>4 of 1</Col>
        <Col>
          <Row>
            <Col style={styles.border} xs={12}>
              5 of 1
            </Col>
            <Col style={styles.border} xs={12}>
              6 of 1
            </Col>
          </Row>
        </Col>
        <Col style={styles.border}>7 of 1</Col>
      </Row>
      <Row>
        <Col style={styles.border}>1 of 2</Col>
        <Col style={styles.border}>2 of 2</Col>
      </Row> */}
    </div>
  );
};

const styles = {
  border: {
    border: "1px solid #ececec",
    borderRadius: 4,
    padding: 20,
  },
};

export default Main;
