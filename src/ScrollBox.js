import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    //ref를 this.box에 할당하니 이러한 객체프랍이 있음
    //scrollTop: 세로 스크롤 바 위치
    //scrollHeight: 스크롤이 있는 박스 안의 div 높이
    //clientHeight: 스크롤이 있는 박스의 높이
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
    console.log(this.box);
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
