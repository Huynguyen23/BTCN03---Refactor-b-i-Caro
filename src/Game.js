import React from 'react';
import './Game.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(400).fill(null),
      xIsNext: true,
      won: false,
      i: -1,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.state.won || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      i: i,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }


  render() {
    const winner = calculateWinner(this.state.squares, this.state.i);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      this.state.won = true;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="container">
          <div className="header">CARO GAME</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
          </div>

          <div className="board-row">
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
          </div>
          <div className="board-row">
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
            {this.renderSquare(48)}
            {this.renderSquare(49)}
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
          </div>
          <div className="board-row">
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            {this.renderSquare(63)}
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
            {this.renderSquare(70)}
            {this.renderSquare(71)}
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
          </div>
          <div className="board-row">
            {this.renderSquare(80)}
            {this.renderSquare(81)}
            {this.renderSquare(82)}
            {this.renderSquare(83)}
            {this.renderSquare(84)}
            {this.renderSquare(85)}
            {this.renderSquare(86)}
            {this.renderSquare(87)}
            {this.renderSquare(88)}
            {this.renderSquare(89)}
            {this.renderSquare(90)}
            {this.renderSquare(91)}
            {this.renderSquare(92)}
            {this.renderSquare(93)}
            {this.renderSquare(94)}
            {this.renderSquare(95)}
            {this.renderSquare(96)}
            {this.renderSquare(97)}
            {this.renderSquare(98)}
            {this.renderSquare(99)}
          </div>
          <div className="board-row">
            {this.renderSquare(100)}
            {this.renderSquare(101)}
            {this.renderSquare(102)}
            {this.renderSquare(103)}
            {this.renderSquare(104)}
            {this.renderSquare(105)}
            {this.renderSquare(106)}
            {this.renderSquare(107)}
            {this.renderSquare(108)}
            {this.renderSquare(109)}
            {this.renderSquare(110)}
            {this.renderSquare(111)}
            {this.renderSquare(112)}
            {this.renderSquare(113)}
            {this.renderSquare(114)}
            {this.renderSquare(115)}
            {this.renderSquare(116)}
            {this.renderSquare(117)}
            {this.renderSquare(118)}
            {this.renderSquare(119)}
          </div>
          <div className="board-row">
            {this.renderSquare(120)}
            {this.renderSquare(121)}
            {this.renderSquare(122)}
            {this.renderSquare(123)}
            {this.renderSquare(124)}
            {this.renderSquare(125)}
            {this.renderSquare(126)}
            {this.renderSquare(127)}
            {this.renderSquare(128)}
            {this.renderSquare(129)}
            {this.renderSquare(130)}
            {this.renderSquare(131)}
            {this.renderSquare(132)}
            {this.renderSquare(133)}
            {this.renderSquare(134)}
            {this.renderSquare(135)}
            {this.renderSquare(136)}
            {this.renderSquare(137)}
            {this.renderSquare(138)}
            {this.renderSquare(139)}
          </div>
          <div className="board-row">
            {this.renderSquare(140)}
            {this.renderSquare(141)}
            {this.renderSquare(142)}
            {this.renderSquare(143)}
            {this.renderSquare(144)}
            {this.renderSquare(145)}
            {this.renderSquare(146)}
            {this.renderSquare(147)}
            {this.renderSquare(148)}
            {this.renderSquare(149)}
            {this.renderSquare(150)}
            {this.renderSquare(151)}
            {this.renderSquare(152)}
            {this.renderSquare(153)}
            {this.renderSquare(154)}
            {this.renderSquare(155)}
            {this.renderSquare(156)}
            {this.renderSquare(157)}
            {this.renderSquare(158)}
            {this.renderSquare(159)}
          </div>
          <div className="board-row">
            {this.renderSquare(160)}
            {this.renderSquare(161)}
            {this.renderSquare(162)}
            {this.renderSquare(163)}
            {this.renderSquare(164)}
            {this.renderSquare(165)}
            {this.renderSquare(166)}
            {this.renderSquare(167)}
            {this.renderSquare(168)}
            {this.renderSquare(169)}
            {this.renderSquare(170)}
            {this.renderSquare(171)}
            {this.renderSquare(172)}
            {this.renderSquare(173)}
            {this.renderSquare(174)}
            {this.renderSquare(175)}
            {this.renderSquare(176)}
            {this.renderSquare(177)}
            {this.renderSquare(178)}
            {this.renderSquare(179)}
          </div>
          <div className="board-row">
            {this.renderSquare(180)}
            {this.renderSquare(181)}
            {this.renderSquare(182)}
            {this.renderSquare(183)}
            {this.renderSquare(184)}
            {this.renderSquare(185)}
            {this.renderSquare(186)}
            {this.renderSquare(187)}
            {this.renderSquare(188)}
            {this.renderSquare(189)}
            {this.renderSquare(190)}
            {this.renderSquare(191)}
            {this.renderSquare(192)}
            {this.renderSquare(193)}
            {this.renderSquare(194)}
            {this.renderSquare(195)}
            {this.renderSquare(196)}
            {this.renderSquare(197)}
            {this.renderSquare(198)}
            {this.renderSquare(199)}
          </div>
          <div className="board-row">
            {this.renderSquare(200)}
            {this.renderSquare(201)}
            {this.renderSquare(202)}
            {this.renderSquare(203)}
            {this.renderSquare(204)}
            {this.renderSquare(205)}
            {this.renderSquare(206)}
            {this.renderSquare(207)}
            {this.renderSquare(208)}
            {this.renderSquare(209)}
            {this.renderSquare(210)}
            {this.renderSquare(211)}
            {this.renderSquare(212)}
            {this.renderSquare(213)}
            {this.renderSquare(214)}
            {this.renderSquare(215)}
            {this.renderSquare(216)}
            {this.renderSquare(217)}
            {this.renderSquare(218)}
            {this.renderSquare(219)}
          </div>
          <div className="board-row">
            {this.renderSquare(220)}
            {this.renderSquare(221)}
            {this.renderSquare(222)}
            {this.renderSquare(223)}
            {this.renderSquare(224)}
            {this.renderSquare(225)}
            {this.renderSquare(226)}
            {this.renderSquare(227)}
            {this.renderSquare(228)}
            {this.renderSquare(229)}
            {this.renderSquare(230)}
            {this.renderSquare(231)}
            {this.renderSquare(232)}
            {this.renderSquare(233)}
            {this.renderSquare(234)}
            {this.renderSquare(235)}
            {this.renderSquare(236)}
            {this.renderSquare(237)}
            {this.renderSquare(238)}
            {this.renderSquare(239)}
          </div>
          <div className="board-row">
            {this.renderSquare(240)}
            {this.renderSquare(241)}
            {this.renderSquare(242)}
            {this.renderSquare(243)}
            {this.renderSquare(244)}
            {this.renderSquare(245)}
            {this.renderSquare(246)}
            {this.renderSquare(247)}
            {this.renderSquare(248)}
            {this.renderSquare(249)}
            {this.renderSquare(250)}
            {this.renderSquare(251)}
            {this.renderSquare(252)}
            {this.renderSquare(253)}
            {this.renderSquare(254)}
            {this.renderSquare(255)}
            {this.renderSquare(256)}
            {this.renderSquare(257)}
            {this.renderSquare(258)}
            {this.renderSquare(259)}
          </div>
          <div className="board-row">
            {this.renderSquare(260)}
            {this.renderSquare(261)}
            {this.renderSquare(262)}
            {this.renderSquare(263)}
            {this.renderSquare(264)}
            {this.renderSquare(265)}
            {this.renderSquare(266)}
            {this.renderSquare(267)}
            {this.renderSquare(268)}
            {this.renderSquare(269)}
            {this.renderSquare(270)}
            {this.renderSquare(271)}
            {this.renderSquare(272)}
            {this.renderSquare(273)}
            {this.renderSquare(274)}
            {this.renderSquare(275)}
            {this.renderSquare(276)}
            {this.renderSquare(277)}
            {this.renderSquare(278)}
            {this.renderSquare(279)}
          </div>
          <div className="board-row">
            {this.renderSquare(280)}
            {this.renderSquare(281)}
            {this.renderSquare(282)}
            {this.renderSquare(283)}
            {this.renderSquare(284)}
            {this.renderSquare(285)}
            {this.renderSquare(286)}
            {this.renderSquare(287)}
            {this.renderSquare(288)}
            {this.renderSquare(289)}
            {this.renderSquare(290)}
            {this.renderSquare(291)}
            {this.renderSquare(292)}
            {this.renderSquare(293)}
            {this.renderSquare(294)}
            {this.renderSquare(295)}
            {this.renderSquare(296)}
            {this.renderSquare(297)}
            {this.renderSquare(298)}
            {this.renderSquare(299)}
          </div>
          <div className="board-row">
            {this.renderSquare(300)}
            {this.renderSquare(301)}
            {this.renderSquare(302)}
            {this.renderSquare(303)}
            {this.renderSquare(304)}
            {this.renderSquare(305)}
            {this.renderSquare(306)}
            {this.renderSquare(307)}
            {this.renderSquare(308)}
            {this.renderSquare(309)}
            {this.renderSquare(310)}
            {this.renderSquare(311)}
            {this.renderSquare(312)}
            {this.renderSquare(313)}
            {this.renderSquare(314)}
            {this.renderSquare(315)}
            {this.renderSquare(316)}
            {this.renderSquare(317)}
            {this.renderSquare(318)}
            {this.renderSquare(319)}
          </div>
          <div className="board-row">
            {this.renderSquare(320)}
            {this.renderSquare(321)}
            {this.renderSquare(322)}
            {this.renderSquare(323)}
            {this.renderSquare(324)}
            {this.renderSquare(325)}
            {this.renderSquare(326)}
            {this.renderSquare(327)}
            {this.renderSquare(328)}
            {this.renderSquare(329)}
            {this.renderSquare(330)}
            {this.renderSquare(331)}
            {this.renderSquare(332)}
            {this.renderSquare(333)}
            {this.renderSquare(334)}
            {this.renderSquare(335)}
            {this.renderSquare(336)}
            {this.renderSquare(337)}
            {this.renderSquare(338)}
            {this.renderSquare(339)}
          </div>
          <div className="board-row">
            {this.renderSquare(340)}
            {this.renderSquare(341)}
            {this.renderSquare(342)}
            {this.renderSquare(343)}
            {this.renderSquare(344)}
            {this.renderSquare(345)}
            {this.renderSquare(346)}
            {this.renderSquare(347)}
            {this.renderSquare(348)}
            {this.renderSquare(349)}
            {this.renderSquare(350)}
            {this.renderSquare(351)}
            {this.renderSquare(352)}
            {this.renderSquare(353)}
            {this.renderSquare(354)}
            {this.renderSquare(355)}
            {this.renderSquare(356)}
            {this.renderSquare(357)}
            {this.renderSquare(358)}
            {this.renderSquare(359)}
          </div>
          <div className="board-row">
            {this.renderSquare(360)}
            {this.renderSquare(361)}
            {this.renderSquare(362)}
            {this.renderSquare(363)}
            {this.renderSquare(364)}
            {this.renderSquare(365)}
            {this.renderSquare(366)}
            {this.renderSquare(367)}
            {this.renderSquare(368)}
            {this.renderSquare(369)}
            {this.renderSquare(370)}
            {this.renderSquare(371)}
            {this.renderSquare(372)}
            {this.renderSquare(373)}
            {this.renderSquare(374)}
            {this.renderSquare(375)}
            {this.renderSquare(376)}
            {this.renderSquare(377)}
            {this.renderSquare(378)}
            {this.renderSquare(379)}
          </div>
          <div className="board-row">
            {this.renderSquare(380)}
            {this.renderSquare(381)}
            {this.renderSquare(382)}
            {this.renderSquare(383)}
            {this.renderSquare(384)}
            {this.renderSquare(385)}
            {this.renderSquare(386)}
            {this.renderSquare(387)}
            {this.renderSquare(388)}
            {this.renderSquare(389)}
            {this.renderSquare(390)}
            {this.renderSquare(391)}
            {this.renderSquare(392)}
            {this.renderSquare(393)}
            {this.renderSquare(394)}
            {this.renderSquare(395)}
            {this.renderSquare(396)}
            {this.renderSquare(397)}
            {this.renderSquare(398)}
            {this.renderSquare(399)}
          </div>
        </div>
        <div className="nobr">
          <div className="status">{status}</div>

          <button className="re-play" onClick={

            () => this.setState({
              squares: Array(400).fill(null),
              xIsNext: true,
              won: false,
              i: -1,
            })}>CHƠI LẠI</button>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares, i) {
  let x, y;
  if (i != -1) {
    x = Math.floor(i / 20);
    y = i % 20;
    var list = [squares[i], null];
    console.log(checkWin(squares, x, y, 2) === 4 && (list.includes(squares[(x + 5) * 20 + y]) || list.includes(squares[(x - 1) * 20 + y])));
    if (
      (checkWin(squares, x, y, 1) === 4 && (list.includes(squares[(x - 5) * 20 + y]) || list.includes(squares[(x + 1) * 20 + y]))) ||
      (checkWin(squares, x, y, 2) === 4 && (list.includes(squares[(x + 5) * 20 + y]) || list.includes(squares[(x - 1) * 20 + y]))) ||
      (checkWin(squares, x, y, 3) === 4 && (list.includes(squares[x * 20 + (y - 5)]) || list.includes(squares[x * 20 + (y + 1)]))) ||
      (checkWin(squares, x, y, 4) === 4 && (list.includes(squares[x * 20 + (y + 5)]) || list.includes(squares[x * 20 + (y - 1)]))) ||
      (checkWin(squares, x, y, 5) === 4 && (list.includes(squares[(x - 5) * 20 + (y - 5)]) || list.includes(squares[(x + 1) * 20 + (y + 1)]))) ||
      (checkWin(squares, x, y, 6) === 4 && (list.includes(squares[(x + 5) * 20 + (y - 5)]) || list.includes(squares[(x - 1) * 20 + (y + 1)]))) ||
      (checkWin(squares, x, y, 7) === 4 && (list.includes(squares[(x - 5) * 20 + (y + 5)]) || list.includes(squares[(x + 1) * 20 + (y - 1)]))) ||
      (checkWin(squares, x, y, 8) === 4 && (list.includes(squares[(x + 5) * 20 + (y + 5)]) || list.includes(squares[(x - 1) * 20 + (y - 1)]))) ||
      (checkWin(squares, x, y, 1) + checkWin(squares, x, y, 2) === 4 && (list.includes(squares[(x - checkWin(squares, x, y, 1) - 1) * 20 + y]) || list.includes(squares[(x + checkWin(squares, x, y, 2) + 1) * 20 + y]))) ||
      (checkWin(squares, x, y, 3) + checkWin(squares, x, y, 4) === 4 && (list.includes(squares[x * 20 + (y - checkWin(squares, x, y, 3) - 1)]) || list.includes(squares[x * 20 + (y + checkWin(squares, x, y, 4) + 1)]))) ||
      (checkWin(squares, x, y, 5) + checkWin(squares, x, y, 8) === 4 && (list.includes(squares[(x - checkWin(squares, x, y, 5) - 1) * 20 + (y - checkWin(squares, x, y, 5) - 1)]) || list.includes(squares[(x + checkWin(squares, x, y, 8) + 1) * 20 + (y + checkWin(squares, x, y, 8) + 1)]))) ||
      (checkWin(squares, x, y, 6) + checkWin(squares, x, y, 7) === 4 && (list.includes(squares[(x + checkWin(squares, x, y, 6) + 1) * 20 + (y - checkWin(squares, x, y, 6) - 1)]) || list.includes(squares[(x - checkWin(squares, x, y, 7) - 1) * 20 + (y + checkWin(squares, x, y, 7) + 1)])))
    ) {
      return squares[i];
    }
  }
  return null;
}

function checkWin(squares, x, y, chieu) {
  let x1 = x;
  let y1 = y;
  switch (chieu) {
    //"u"
    case 1:
      if (x1 > 0 && squares[(x1 - 1) * 20 + y1] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1 - 1, y1, 1) + 1;
      }
      break;
    //"d"
    case 2:
      if (x1 > 0 && x1 < 19 && squares[(x1 + 1) * 20 + y1] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1 + 1, y1, 2) + 1;
      }
      break;
    //"l"
    case 3:
      if (y1 > 0 && squares[x1 * 20 + (y1 - 1)] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1, y1 - 1, 3) + 1;
      }
      break;
    //"r"
    case 4:
      if (y1 > 0 && y1 < 19 && squares[x1 * 20 + (y1 + 1)] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1, y1 + 1, 4) + 1;
      }
      break;
    //"lu"
    case 5:
      if (y1 > 0 && x1 > 0 && squares[(x1 - 1) * 20 + (y1 - 1)] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1 - 1, y1 - 1, 5) + 1;
      }
      break;
    //"ld"
    case 6:
      if (x1 < 19 && y1 > 0 && squares[(x1 + 1) * 20 + (y1 - 1)] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1 + 1, y1 - 1, 6) + 1;
      }
      break;
    //"ru"
    case 7:
      if (x1 > 0 && y1 < 19 && squares[(x1 - 1) * 20 + (y1 + 1)] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1 - 1, y1 + 1, 7) + 1;
      }
      break;
    //"rd"
    case 8:
      if (x1 < 19 && y1 < 19 && squares[(x1 + 1) * 20 + (y1 + 1)] === squares[x1 * 20 + y1]) {
        return checkWin(squares, x1 + 1, y1 + 1, 8) + 1;
      }
      break;
    default:
      break;
  }
  return 0;
}

export default Game;