import WrapLayer from 'WRAP/UI/WrapLayer';

class PortLayer extends WrapLayer {
  constructor(conf) {
    super(conf);
    this.setPortTooltip();
  }

  setPortTooltip() {
    this.setTooltip((geo) => {
      const p = geo && geo.properties;
      if (p) {
        return `${p.direction_text}/${p.speed_text}`;
      }
      return null;
    });
  }
  /* eslint-disable */
  ctrlLayer(type, state) {
    const { port } = state;
    this.setVisible(port.portChecked);
  }
}

export default PortLayer;
