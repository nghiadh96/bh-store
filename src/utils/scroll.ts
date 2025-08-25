export const smoothScrollTo = (elementId: string, offset?: number) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Scroll to top first, then scroll to element
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Wait a bit for the scroll to top to complete, then scroll to element
    setTimeout(() => {
      // Tính toán chiều cao thực tế của header
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      // Responsive offset: sử dụng chiều cao header + padding
      const responsiveOffset =
        offset ||
        (window.innerWidth < 768 ? headerHeight + 10 : headerHeight + 20);
      const elementPosition = element.offsetTop - responsiveOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }, 300);
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
