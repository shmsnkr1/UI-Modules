import WrapLayer from 'WRAP/UI/WrapLayer';

class GridLineLayer extends WrapLayer {
  constructor(conf) {
    super(conf);
    this.dispathfunc = conf.dispatchAction;
    this.setGirdLineTooltip();
  }

  setGirdLineTooltip() {
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
    const { gridline } = state;
    this.setVisible(gridline.gridLineChecked);

  }
}

export default GridLineLayer;
