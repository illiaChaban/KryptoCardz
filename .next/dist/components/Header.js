'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Dan\\Documents\\GitHub\\kryptocardz-test\\KryptoCardz\\components\\Header.js';

// use curly braces to import one possible item of an import

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '25px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'KryptoCardz')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_routes.Link, { route: '/campaigns/mydeck', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'My Deck')), _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Marketplace')), _react2.default.createElement(_routes.Link, { route: '/campaigns/gems', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, '+'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwibWFyZ2luVG9wIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImNsYXNzTmFtZSIsIk1lbnUiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUhBLElBQUlBLGVBQWUseUZBQW5COztBQUdrQzs7a0JBRWxCLFlBQVk7QUFDMUIsU0FBTyxnQkFBTUMsYUFBTix3QkFFTCxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsTUFBYixFQUFULEVBQWdDQyxVQUFVO0FBQ3RDQyxnQkFBVUwsWUFENEI7QUFFdENNLGtCQUFZO0FBRjBCO0FBQTFDLEdBRkssRUFPTCxnQkFBTUwsYUFBTixlQUVFLEVBQUVNLE9BQU8sR0FBVCxFQUFjSCxVQUFVO0FBQ3BCQyxnQkFBVUwsWUFEVTtBQUVwQk0sa0JBQVk7QUFGUTtBQUF4QixHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sQ0FDRSxHQURGLEVBRUUsRUFBRU8sV0FBVyxNQUFiLEVBQXFCSixVQUFVO0FBQzNCQyxnQkFBVUwsWUFEaUI7QUFFM0JNLGtCQUFZO0FBRmU7QUFBL0IsR0FGRixFQU9FLGFBUEYsQ0FQRixDQVBLLEVBd0JMLGdCQUFNTCxhQUFOLENBQ0Usc0JBQUtRLElBRFAsRUFFRSxFQUFFQyxVQUFVLE9BQVosRUFBcUJOLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sZUFFRSxFQUFFTSxPQUFPLG1CQUFULEVBQThCSCxVQUFVO0FBQ3BDQyxnQkFBVUwsWUFEMEI7QUFFcENNLGtCQUFZO0FBRndCO0FBQXhDLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixDQUNFLEdBREYsRUFFRSxFQUFFTyxXQUFXLE1BQWIsRUFBcUJKLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsU0FQRixDQVBGLENBUEYsRUF3QkUsZ0JBQU1MLGFBQU4sZUFFRSxFQUFFTSxPQUFPLEdBQVQsRUFBY0gsVUFBVTtBQUNwQkMsZ0JBQVVMLFlBRFU7QUFFcEJNLGtCQUFZO0FBRlE7QUFBeEIsR0FGRixFQU9FLGdCQUFNTCxhQUFOLENBQ0UsR0FERixFQUVFLEVBQUVPLFdBQVcsTUFBYixFQUFxQkosVUFBVTtBQUMzQkMsZ0JBQVVMLFlBRGlCO0FBRTNCTSxrQkFBWTtBQUZlO0FBQS9CLEdBRkYsRUFPRSxhQVBGLENBUEYsQ0F4QkYsRUF5Q0UsZ0JBQU1MLGFBQU4sZUFFRSxFQUFFTSxPQUFPLGlCQUFULEVBQTRCSCxVQUFVO0FBQ2xDQyxnQkFBVUwsWUFEd0I7QUFFbENNLGtCQUFZO0FBRnNCO0FBQXRDLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixDQUNFLEdBREYsRUFFRSxFQUFFTyxXQUFXLE1BQWIsRUFBcUJKLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsR0FQRixDQVBGLENBekNGLENBeEJLLENBQVA7QUFvRkQsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9qc3hGaWxlTmFtZSA9ICdDOlxcXFxVc2Vyc1xcXFxEYW5cXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxrcnlwdG9jYXJkei10ZXN0XFxcXEtyeXB0b0NhcmR6XFxcXGNvbXBvbmVudHNcXFxcSGVhZGVyLmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51LCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnOyAvLyB1c2UgY3VybHkgYnJhY2VzIHRvIGltcG9ydCBvbmUgcG9zc2libGUgaXRlbSBvZiBhbiBpbXBvcnRcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTWVudSxcbiAgICB7IHN0eWxlOiB7IG1hcmdpblRvcDogJzI1cHgnIH0sIF9fc291cmNlOiB7XG4gICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXI6IDdcbiAgICAgIH1cbiAgICB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBMaW5rLFxuICAgICAgeyByb3V0ZTogJy8nLCBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogOFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2EnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2l0ZW0nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdLcnlwdG9DYXJkeidcbiAgICAgIClcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBNZW51Lk1lbnUsXG4gICAgICB7IHBvc2l0aW9uOiAncmlnaHQnLCBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExpbmssXG4gICAgICAgIHsgcm91dGU6ICcvY2FtcGFpZ25zL215ZGVjaycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMTZcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnaXRlbScsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnTXkgRGVjaydcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExpbmssXG4gICAgICAgIHsgcm91dGU6ICcvJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAyMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnYScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdpdGVtJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMjFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdNYXJrZXRwbGFjZSdcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExpbmssXG4gICAgICAgIHsgcm91dGU6ICcvY2FtcGFpZ25zL2dlbXMnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2l0ZW0nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJysnXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG59KTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwibWFyZ2luVG9wIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImNsYXNzTmFtZSIsIk1lbnUiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUhBLElBQUlBLGVBQWUseUZBQW5COztBQUdrQzs7a0JBRWxCLFlBQVk7QUFDMUIsU0FBTyxnQkFBTUMsYUFBTix3QkFFTCxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsTUFBYixFQUFULEVBQWdDQyxVQUFVO0FBQ3RDQyxnQkFBVUwsWUFENEI7QUFFdENNLGtCQUFZO0FBRjBCO0FBQTFDLEdBRkssRUFPTCxnQkFBTUwsYUFBTixlQUVFLEVBQUVNLE9BQU8sR0FBVCxFQUFjSCxVQUFVO0FBQ3BCQyxnQkFBVUwsWUFEVTtBQUVwQk0sa0JBQVk7QUFGUTtBQUF4QixHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sQ0FDRSxHQURGLEVBRUUsRUFBRU8sV0FBVyxNQUFiLEVBQXFCSixVQUFVO0FBQzNCQyxnQkFBVUwsWUFEaUI7QUFFM0JNLGtCQUFZO0FBRmU7QUFBL0IsR0FGRixFQU9FLGFBUEYsQ0FQRixDQVBLLEVBd0JMLGdCQUFNTCxhQUFOLENBQ0Usc0JBQUtRLElBRFAsRUFFRSxFQUFFQyxVQUFVLE9BQVosRUFBcUJOLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsZ0JBQU1MLGFBQU4sZUFFRSxFQUFFTSxPQUFPLG1CQUFULEVBQThCSCxVQUFVO0FBQ3BDQyxnQkFBVUwsWUFEMEI7QUFFcENNLGtCQUFZO0FBRndCO0FBQXhDLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixDQUNFLEdBREYsRUFFRSxFQUFFTyxXQUFXLE1BQWIsRUFBcUJKLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsU0FQRixDQVBGLENBUEYsRUF3QkUsZ0JBQU1MLGFBQU4sZUFFRSxFQUFFTSxPQUFPLEdBQVQsRUFBY0gsVUFBVTtBQUNwQkMsZ0JBQVVMLFlBRFU7QUFFcEJNLGtCQUFZO0FBRlE7QUFBeEIsR0FGRixFQU9FLGdCQUFNTCxhQUFOLENBQ0UsR0FERixFQUVFLEVBQUVPLFdBQVcsTUFBYixFQUFxQkosVUFBVTtBQUMzQkMsZ0JBQVVMLFlBRGlCO0FBRTNCTSxrQkFBWTtBQUZlO0FBQS9CLEdBRkYsRUFPRSxhQVBGLENBUEYsQ0F4QkYsRUF5Q0UsZ0JBQU1MLGFBQU4sZUFFRSxFQUFFTSxPQUFPLGlCQUFULEVBQTRCSCxVQUFVO0FBQ2xDQyxnQkFBVUwsWUFEd0I7QUFFbENNLGtCQUFZO0FBRnNCO0FBQXRDLEdBRkYsRUFPRSxnQkFBTUwsYUFBTixDQUNFLEdBREYsRUFFRSxFQUFFTyxXQUFXLE1BQWIsRUFBcUJKLFVBQVU7QUFDM0JDLGdCQUFVTCxZQURpQjtBQUUzQk0sa0JBQVk7QUFGZTtBQUEvQixHQUZGLEVBT0UsR0FQRixDQVBGLENBekNGLENBeEJLLENBQVA7QUFvRkQsQyIsImZpbGUiOiJ1bmtub3duIn0=