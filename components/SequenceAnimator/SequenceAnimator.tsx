// Reworked by Dylan Lu, this thing was kinda crappy beforehand

import React from "react";
import { ease } from "./common";
import { Easing } from "./common.types";
import {
  SequenceAnimatorProps,
  SequenceAnimatorState,
  SequenceAnimatorDefaultProps,
} from "./types";

export default class SequenceAnimator extends React.Component<
  SequenceAnimatorProps,
  SequenceAnimatorState
> {
  static displayName = "SequenceAnimator";
  static defaultProps: SequenceAnimatorDefaultProps = {
    duration: 1000,
    autoplay: true,
    easing: "linear",
    loop: true,
  };
  private _animationFrame: ReturnType<typeof requestAnimationFrame> | undefined;
  private _animationStart: number | null | undefined;

  state = {
    frame: 0,
  };

  componentDidMount() {
    const { autoplay } = this.props;

    if (autoplay) {
      this.start();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._animationFrame as number);
  }

  start() {
    this._playAnimation();
  }

  stop() {
    cancelAnimationFrame(this._animationFrame as number);
  }

  reset() {
    this.setState({ frame: 0 });
  }

  render() {
    return (
      <div>
        {this._getChildrenArray().map((Child, i) => {
          return (
            <div key={i} className={`${!this._frameEnabled(i) && "opacity-0"}`}>
              {Child}
            </div>
          );
        })}
      </div>
    );
  }

  _getChildrenArray() {
    const { children } = this.props;
    return React.Children.toArray(children || []);
  }

  _getFrame = () => {
    const { frame } = this.state;
    const childrenArr = this._getChildrenArray();

    return childrenArr.length >= frame ? childrenArr[frame] : childrenArr[0];
  };

  _frameEnabled = (frame: number) => {
    return frame == this.state.frame;
  };

  _playAnimation = () => {
    this._animationFrame = requestAnimationFrame(this._onAnimate);
    this._getChildrenArray()[this.state.frame];
  };

  _onAnimate = (timestamp: number) => {
    const { onSequenceEnd, onAnimationStop, loop, easing, duration } =
      this.props;
    const childrenArr = this._getChildrenArray();

    if (!this._animationStart) {
      this._animationStart = timestamp;
    }

    let nextFrame = Math.floor(
      ease(easing as Easing)(
        timestamp - this._animationStart,
        0,
        childrenArr.length,
        duration as number
      )
    );

    if (nextFrame > childrenArr.length - 1) {
      if (onSequenceEnd) {
        onSequenceEnd();
      }

      if (loop) {
        nextFrame %= childrenArr.length;
        this._animationStart = timestamp;
      } else {
        nextFrame = -1;
      }
    }

    if (nextFrame > -1) {
      this.setState({ frame: nextFrame }, () => {
        this._playAnimation();
      });
    } else if (onAnimationStop) {
      onAnimationStop();
    }
  };
}
