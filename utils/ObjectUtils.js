export const isEmpty = value => (value === '' || value === undefined || value === null);

export const isNotEmpty = value => (!isEmpty(value));

export const emptyToNull = value => (isEmpty(value) ? null : value);

export const nullToEmpty = value => (value === null ? '' : value);

export const length = value => (isEmpty(value) ? 0 : value.length);

export const equal = (value1, value2) => {
  if (isNotEmpty(value1) && isNotEmpty(value2)) {
    return value1 === value2;
  }

  return isEmpty(value1) && isEmpty(value2);
};

const getKeyvalue = (key, data) => {
  const splits = key.split('.');

  return splits.reduce((a, b) => {
    if (Object.keys(a).length === 0) {
      return { ...data[b] };
    }
    if (isEmpty(a[b])) {
      return '';
    }
    return a[b];
  }, {});
};

/**
 * 使用例： datas.sort(this({
 *  column: 'aaa',
 *  asc: true/false,
 *  nullOrder: true/false,
 * }))
 */
export const sortItems = (settings) => {
  const items = settings;
	/* eslint-disable */
	const length = settings.length;

	return (obj1, obj2) => {
		let i = 0;
		let result = 0;

		while (result === 0 && i < length) {
			const property = items[i];

			result = ((prop) => {
        const asc = prop.asc === undefined ? true : prop.asc;
        const nullAsc = prop.nullOrder === undefined ? false : prop.nullOrder;
        const order = asc ? 1 : -1;
				const nullOrder = nullAsc ? 1 : -1;
				const item = prop.column;

        return (a, b) => {
					const valueA = item.indexOf('.') === -1 ? a[item] : getKeyvalue(item, a);
					const valueB = item.indexOf('.') === -1 ? b[item] : getKeyvalue(item, b);

					if (isEmpty(valueA) && isEmpty(valueB)) return 0;
					if (isEmpty(valueA)) return -1 * nullOrder;
					if (!isEmpty(valueA) && isEmpty(valueB)) return nullOrder;
					if (valueA < valueB) return -1 * order;
					if (valueA > valueB) return 1 * order;
					return 0;
				};
			})(property)(obj1, obj2);

			i += 1;
		}

		return result;
	};
};

export const dynamicSort = (asc, property) => {
  const sortOrder = asc ? 1 : -1;

  return (a, b) => {
    let result = 0;

    if (a[property] < b[property]) result = -1;
    if (a[property] > b[property]) result = 1;

    return result * sortOrder;
  };
};

export const sortMultiple = (acs, ...args) => {
  const props = args;

  return (obj1, obj2) => {
    let i = 0;
    let result = 0;
    const numberOfProperties = props.length;

    while (result === 0 && i < numberOfProperties) {
      result = dynamicSort(acs, props[i])(obj1, obj2);
      i += 1;
    }

    return result;
  };
};

/** Clipboardへコピー */
export const ToClipboard = (textVal) => {
  // テキストエリアを用意する
  const copyFrom = document.createElement('textarea');
  // テキストエリアへ値をセット
  copyFrom.textContent = textVal;
  // bodyタグの要素を取得
  const bodyElm = document.getElementsByTagName('body')[0];
  // 子要素にテキストエリアを配置
  bodyElm.appendChild(copyFrom);
  // テキストエリアの値を選択
  copyFrom.select();
  // コピーコマンド発行
  const retVal = document.execCommand('copy');
  // 追加テキストエリアを削除
  bodyElm.removeChild(copyFrom);

  return retVal;
};

/** 前方一致 */
export const prefixSearch = (list, value) => list.filter(item => item.indexOf(value) === 0);

export const join = (value1 = '', value2 = '', separator = '') => {
  // 両方空白
  if (isEmpty(value1) && isEmpty(value2)) return '';

  return [value1, value2].join(separator);
}

export const isObject = (item) => {
  return typeof item === 'object' && item !== null && !Array.isArray(item);
}

export const deepEmptyToNull = (object) => {
  if (!isObject(object)) return emptyToNull(object);

  const newObject = {};

  Object.keys(object).forEach(key => {
    const item = object[key];

    if (Array.isArray(item)) {
      newObject[key] = item.map(subItem => deepEmptyToNull(subItem));
    } else if (isObject(item)) {
      newObject[key] = deepEmptyToNull(item);
    } else {
      newObject[key] = emptyToNull(item);
    }
  });

  return newObject;
}

export const deepNullToEmpty = (object) => {
  if (!isObject(object)) return nullToEmpty(object);

  const newObject = {};

  Object.keys(object).forEach(key => {
    const item = object[key];

    if (Array.isArray(item)) {
      newObject[key] = item.map(subItem => deepNullToEmpty(subItem));
    } else if (isObject(item)) {
      newObject[key] = deepNullToEmpty(item);
    } else {
      newObject[key] = nullToEmpty(item);
    }
  });

  return newObject;
}

export const joinObj = (list, separator = '') => {
  if (!Array.isArray(list)) {
    return list;
  }

  return list.reduce((prev, curr, index, array) => {
    prev.push(curr);
    if ((index + 1) !== array.length) prev.push(separator);
    return prev;
  }, []);
}