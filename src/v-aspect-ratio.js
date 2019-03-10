const pattern = /^\d+:\d+$/;

export default function(el, binding) {
  const { value } = binding;

  if (!value) {
    throw new Error("No value provided");
  }

  if (typeof value !== "string") {
    throw new Error(
      `Expected directive binding value type to be a string but found a ${typeof value} instead`
    );
  }

  if (!pattern.test(value)) {
    throw new Error(
      `Expected directive value to match pattern "[Integer]:[Integer]" gut got a ${value}`
    );
  }

  const values = value.split(":").map(Number);

  if (values[0] === 0) {
    throw new Error("Division by 0");
  }

  el.style.paddingBottom = `${(values[1] / values[0]) * 100}%`;
}
