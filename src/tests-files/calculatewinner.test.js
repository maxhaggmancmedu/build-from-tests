import {render, screen, waitFor} from "@testing-library/react"
import CalculateWinner from "../components/CalculateWinner"

describe("The pokemon in the lead or tied should be displayed", () => {
  test ("The display with the winner is rendered", () => {
    render(<CalculateWinner/>)

    const winnerDisplay = screen.getByRole("heading", {level: 2})

    expect(winnerDisplay).toBeInTheDocument()
  })
  test ("'Start Voting' is displayed when no votes has been made", () => {
    render(<CalculateWinner bulbasaurVote={0} charmanderVote={0} squirtleVote={0} />)

    // waitFor(() => {
      const results = screen.getByText('Start voting!')
      expect(results).toBeInTheDocument()

    // })
  })
// these vote props I did not like, I would have liked to implement it differently by just passing the all pokemons to the component
  test ('displays the winning Pokemon when there is a single winner', () => {
    render(<CalculateWinner bulbasaurVote={3} charmanderVote={2} squirtleVote={1} />)

    waitFor(() => {
      const results = screen.getByText('Bulbasaur is in the lead with 3 votes!')
      expect(results).toBeInTheDocument()

    })
  })

  test ("displays which pokemons are in a tie when they have equal votes",  () => {
    render(<CalculateWinner bulbasaurVote={2} charmanderVote={2} squirtleVote={0} />)
     waitFor(() => {
      const results = screen.getByText("It's a tie between Bulbasaur and Charmander with 2 votes each!")
      expect(results).toBeInTheDocument()

    })
  })

  test ("displays when all pokemons are in a tie when they have equal votes", () => {
    render(<CalculateWinner bulbasaurVote={2} charmanderVote={2} squirtleVote={2} />)

    waitFor(() => {
      const results = screen.getByText("It's a tie between Bulbasaur and Charmander and Squirtle with 2 votes each!")
      expect(results).toBeInTheDocument()

    })
  })

})