import "./Container.css";

function Container({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={`ui-container ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}

export default Container;
