'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _LayoutSearch = require('../components/LayoutSearch');

var _LayoutSearch2 = _interopRequireDefault(_LayoutSearch);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _SearchSortPart = require('../components/SearchSortPart');

var _SearchSortPart2 = _interopRequireDefault(_SearchSortPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Dan\\Documents\\GitHub\\kryptocardz-test\\KryptoCardz\\pages\\index.js?entry';
//import Campaign from '../ethereum/campaign';
//import axios from 'axios';


// class based component

var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchValue: '',
      sortBy1: 'created',
      sortBy2: 'Low to high'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',

    //dynamically compute route for description tag below
    value: function renderCampaigns() {
      var _state = this.state,
          sortBy1 = _state.sortBy1,
          sortBy2 = _state.sortBy2,
          searchValue = _state.searchValue;

      //const accounts = await web3.eth.getAccounts();
      //const ownerCards = await factory.methods.getCardsByOwner(accounts[0]).call();

      var items = this.props.allStructs.map(function (request, index) {
        return {

          image: _react2.default.createElement('img', { src: 'https://storage.googleapis.com/cryptocardz-c5066.appspot.com/' + (parseInt(request.Id) + 1) + '.png', width: '150', style: { marginLeft: '70px', marginTop: '15px', marginBottom: '15px', pointerEvents: 'none' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          header: request.Name,
          meta: _web2.default.utils.fromWei(request.Price, 'ether') + " ETH",
          href: '/campaigns/' + request.Id,
          created: request.CreatedDate
          //fluid: true  // causes cards to go full width of frame
        };
      });
      items.sort(function (a, b) {
        if (a[sortBy1] > b[sortBy1]) return 1;
        if (a[sortBy1] < b[sortBy1]) return -1;
        if (a[sortBy1] === b[sortBy1]) return 0;
      });

      if (sortBy2 === 'High to low') items.reverse();

      if (searchValue !== '') {
        items = items.filter(function (item) {
          return item.header.toLowerCase().includes(searchValue.toLowerCase());
        });
      }

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var searchValue = this.state.searchValue;

      var searchHandler = function searchHandler(event) {
        return _this2.setState({ searchValue: event.target.value });
      };
      var sort1Handler = function sort1Handler(event, data) {
        return _this2.setState({ sortBy1: data.value });
      };
      var sort2Handler = function sort2Handler(event, data) {
        return _this2.setState({ sortBy2: data.value });
      };

      return _react2.default.createElement(_LayoutSearch2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('div', { style: { marginTop: '25px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Marketplace'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_SearchSortPart2.default, {
        searchHandler: searchHandler,
        searchValue: searchValue,
        sort1Handler: sort1Handler,
        sort2Handler: sort2Handler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('div', { style: { marginLeft: '15px', marginTop: '10px', marginRight: '15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, this.renderCampaigns())))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var structCount, allStructs;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getStructCount().call();

              case 2:
                structCount = _context.sent;
                _context.next = 5;
                return _promise2.default.all( // get array of solidity Structs, trick
                Array(parseInt(structCount)).fill().map(function (element, index) {
                  return _factory2.default.methods.campaignStructs(index).call();
                }));

              case 5:
                allStructs = _context.sent;
                return _context.abrupt('return', { allStructs: allStructs });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;

// Next also requires react component to be exported for each wep page file,
// as seen on line 17

//npm run dev => starts web app
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJzb3J0QnkxIiwic29ydEJ5MiIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiX3N0YXRlIiwiaXRlbXMiLCJwcm9wcyIsImFsbFN0cnVjdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJzZUludCIsIklkIiwid2lkdGgiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwb2ludGVyRXZlbnRzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJoZWFkZXIiLCJOYW1lIiwibWV0YSIsInV0aWxzIiwiZnJvbVdlaSIsIlByaWNlIiwiaHJlZiIsImNyZWF0ZWQiLCJDcmVhdGVkRGF0ZSIsInNvcnQiLCJhIiwiYiIsInJldmVyc2UiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkdyb3VwIiwicmVuZGVyIiwiX3RoaXMyIiwic2VhcmNoSGFuZGxlciIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJzb3J0MUhhbmRsZXIiLCJkYXRhIiwic29ydDJIYW5kbGVyIiwiUm93IiwibWFyZ2luUmlnaHQiLCJfcmVmMiIsIm1hcmsiLCJfY2FsbGVlIiwic3RydWN0Q291bnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibWV0aG9kcyIsImdldFN0cnVjdENvdW50Iiwic2VudCIsImFsbCIsImZpbGwiLCJlbGVt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QSx1QkFBT0wsU0FBU1UsTUFBVCxDQUFnQixRQUFoQixFQUEwQixFQUFFL0QsWUFBWUEsVUFBZCxFQUExQixDQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU9xRCxTQUFTVyxJQUFULEVBQVA7QUFuQko7QUFxQkQ7QUFDRixTQXhCTSxFQXdCSmYsT0F4QkksRUF3QkssSUF4QkwsQ0FBUDtBQXlCRCxPQTNCMkMsQ0FBaEMsQ0FBWjs7QUE2QkEsZUFBU2dCLGVBQVQsR0FBMkI7QUFDekIsZUFBT2xCLE1BQU0zRCxLQUFOLENBQVksSUFBWixFQUFrQlAsU0FBbEIsQ0FBUDtBQUNEOztBQUVELGFBQU9vRixlQUFQO0FBQ0QsS0FuQ007QUFGSixHQUFELENBbklKOztBQTJLQSxTQUFPM0YsYUFBUDtBQUNELENBak1tQixrQkFBcEI7O2tCQW1NZUEsYTs7QUFFZjtBQUNBOztBQUVBIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfUHJvbWlzZSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZSc7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0M6XFxcXFVzZXJzXFxcXERhblxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXGtyeXB0b2NhcmR6LXRlc3RcXFxcS3J5cHRvQ2FyZHpcXFxccGFnZXNcXFxcaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIENhcmQsIEJ1dHRvbiwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRTZWFyY2gnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG4vL2ltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG4vL2ltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBTZWFyY2hTb3J0UGFydCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFNvcnRQYXJ0JztcblxuLy8gY2xhc3MgYmFzZWQgY29tcG9uZW50XG5cbnZhciBDYW1wYWlnbkluZGV4ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhbXBhaWduSW5kZXgsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhbXBhaWduSW5kZXgoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbXBhaWduSW5kZXgpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENhbXBhaWduSW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2FtcGFpZ25JbmRleCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgc29ydEJ5MTogJ2NyZWF0ZWQnLFxuICAgICAgc29ydEJ5MjogJ0xvdyB0byBoaWdoJ1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhbXBhaWduSW5kZXgsIFt7XG4gICAga2V5OiAncmVuZGVyQ2FtcGFpZ25zJyxcblxuXG4gICAgLy9keW5hbWljYWxseSBjb21wdXRlIHJvdXRlIGZvciBkZXNjcmlwdGlvbiB0YWcgYmVsb3dcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc29ydEJ5MSA9IF9zdGF0ZS5zb3J0QnkxLFxuICAgICAgICAgIHNvcnRCeTIgPSBfc3RhdGUuc29ydEJ5MixcbiAgICAgICAgICBzZWFyY2hWYWx1ZSA9IF9zdGF0ZS5zZWFyY2hWYWx1ZTtcblxuICAgICAgLy9jb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAvL2NvbnN0IG93bmVyQ2FyZHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0Q2FyZHNCeU93bmVyKGFjY291bnRzWzBdKS5jYWxsKCk7XG5cbiAgICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuYWxsU3RydWN0cy5tYXAoZnVuY3Rpb24gKHJlcXVlc3QsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICBpbWFnZTogUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6ICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vY3J5cHRvY2FyZHotYzUwNjYuYXBwc3BvdC5jb20vJyArIChwYXJzZUludChyZXF1ZXN0LklkKSArIDEpICsgJy5wbmcnLCB3aWR0aDogJzE1MCcsIHN0eWxlOiB7IG1hcmdpbkxlZnQ6ICc3MHB4JywgbWFyZ2luVG9wOiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzE1cHgnLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNjFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXI6IHJlcXVlc3QuTmFtZSxcbiAgICAgICAgICBtZXRhOiB3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC5QcmljZSwgJ2V0aGVyJykgKyBcIiBFVEhcIixcbiAgICAgICAgICBocmVmOiAnL2NhbXBhaWducy8nICsgcmVxdWVzdC5JZCxcbiAgICAgICAgICBjcmVhdGVkOiByZXF1ZXN0LkNyZWF0ZWREYXRlXG4gICAgICAgICAgLy9mbHVpZDogdHJ1ZSAgLy8gY2F1c2VzIGNhcmRzIHRvIGdvIGZ1bGwgd2lkdGggb2YgZnJhbWVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgaXRlbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYVtzb3J0QnkxXSA+IGJbc29ydEJ5MV0pIHJldHVybiAxO1xuICAgICAgICBpZiAoYVtzb3J0QnkxXSA8IGJbc29ydEJ5MV0pIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGFbc29ydEJ5MV0gPT09IGJbc29ydEJ5MV0pIHJldHVybiAwO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChzb3J0QnkyID09PSAnSGlnaCB0byBsb3cnKSBpdGVtcy5yZXZlcnNlKCk7XG5cbiAgICAgIGlmIChzZWFyY2hWYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5oZWFkZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuR3JvdXAsIHsgaXRlbXM6IGl0ZW1zLCBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogODRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzZWFyY2hWYWx1ZSA9IHRoaXMuc3RhdGUuc2VhcmNoVmFsdWU7XG5cbiAgICAgIHZhciBzZWFyY2hIYW5kbGVyID0gZnVuY3Rpb24gc2VhcmNoSGFuZGxlcihldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgIH07XG4gICAgICB2YXIgc29ydDFIYW5kbGVyID0gZnVuY3Rpb24gc29ydDFIYW5kbGVyKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuc2V0U3RhdGUoeyBzb3J0QnkxOiBkYXRhLnZhbHVlIH0pO1xuICAgICAgfTtcbiAgICAgIHZhciBzb3J0MkhhbmRsZXIgPSBmdW5jdGlvbiBzb3J0MkhhbmRsZXIoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7IHNvcnRCeTI6IGRhdGEudmFsdWUgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA5NlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiB7IG1hcmdpblRvcDogJzI1cHgnIH0sIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDk3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDk4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnTWFya2V0cGxhY2UnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgR3JpZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWFyY2hTb3J0UGFydCwge1xuICAgICAgICAgICAgICBzZWFyY2hIYW5kbGVyOiBzZWFyY2hIYW5kbGVyLFxuICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICAgIHNvcnQxSGFuZGxlcjogc29ydDFIYW5kbGVyLFxuICAgICAgICAgICAgICBzb3J0MkhhbmRsZXI6IHNvcnQySGFuZGxlcixcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogeyBtYXJnaW5MZWZ0OiAnMTVweCcsIG1hcmdpblRvcDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzE1cHgnIH0sIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwOFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYW1wYWlnbnMoKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgdmFyIHN0cnVjdENvdW50LCBhbGxTdHJ1Y3RzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5Lm1ldGhvZHMuZ2V0U3RydWN0Q291bnQoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHN0cnVjdENvdW50ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX1Byb21pc2UuYWxsKCAvLyBnZXQgYXJyYXkgb2Ygc29saWRpdHkgU3RydWN0cywgdHJpY2tcbiAgICAgICAgICAgICAgICBBcnJheShwYXJzZUludChzdHJ1Y3RDb3VudCkpLmZpbGwoKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLmNhbXBhaWduU3RydWN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYWxsU3RydWN0cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgeyBhbGxTdHJ1Y3RzOiBhbGxTdHJ1Y3RzIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gQ2FtcGFpZ25JbmRleDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuLy8gTmV4dCBhbHNvIHJlcXVpcmVzIHJlYWN0IGNvbXBvbmVudCB0byBiZSBleHBvcnRlZCBmb3IgZWFjaCB3ZXAgcGFnZSBmaWxlLFxuLy8gYXMgc2VlbiBvbiBsaW5lIDE3XG5cbi8vbnBtIHJ1biBkZXYgPT4gc3RhcnRzIHdlYiBhcHAiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJzb3J0QnkxIiwic29ydEJ5MiIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiX3N0YXRlIiwiaXRlbXMiLCJwcm9wcyIsImFsbFN0cnVjdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJzZUludCIsIklkIiwid2lkdGgiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwb2ludGVyRXZlbnRzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJoZWFkZXIiLCJOYW1lIiwibWV0YSIsInV0aWxzIiwiZnJvbVdlaSIsIlByaWNlIiwiaHJlZiIsImNyZWF0ZWQiLCJDcmVhdGVkRGF0ZSIsInNvcnQiLCJhIiwiYiIsInJldmVyc2UiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIkdyb3VwIiwicmVuZGVyIiwiX3RoaXMyIiwic2VhcmNoSGFuZGxlciIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJzb3J0MUhhbmRsZXIiLCJkYXRhIiwic29ydDJIYW5kbGVyIiwiUm93IiwibWFyZ2luUmlnaHQiLCJfcmVmMiIsIm1hcmsiLCJfY2FsbGVlIiwic3RydWN0Q291bnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibWV0aG9kcyIsImdldFN0cnVjdENvdW50Iiwic2VudCIsImFsbCIsImZpbGwiLCJlbGVt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