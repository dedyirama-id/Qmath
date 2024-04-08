const Qmath = {
  async render() {
    return `
      <div class="hero grow bg-base-200 h-full">
        <div class="hero-content flex-col gap-8 lg:flex-row-reverse">
          <div class="flex flex-col gap-4">
            <qmath-statistic></qmath-statistic>
          </div>
          <qmath-panel></qmath-panel>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Do something
  },

};

export default Qmath;
