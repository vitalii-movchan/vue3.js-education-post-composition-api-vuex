export default {
    name: "intersection",
    mounted(element, binding) {
        const options = {
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 1.0,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                // Each entry describes an intersection change for one observed
                if (entry.isIntersecting === true) {
                    // binding.value represents the callback function passed to the directive
                    binding.value();
                }
            });
        };

        // Create the observer instance and attach it directly to the element instance
        element.observer = new IntersectionObserver(callback, options);

        // Start monitoring the DOM element
        element.observer.observe(element);
    },
    unmounted(element) {
        element.observer.disconnect();
    }
}