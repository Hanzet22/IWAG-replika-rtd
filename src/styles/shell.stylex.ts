import * as stylex from "@stylexjs/stylex";

export const shellStyles = stylex.create({
  wordmark: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    color: "var(--text)",
    fontWeight: 750,
    letterSpacing: "-0.035em",
    textDecoration: "none"
  }
});

export const wordmarkClass = stylex.props(shellStyles.wordmark).className;
