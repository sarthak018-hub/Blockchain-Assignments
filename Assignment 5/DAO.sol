// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {

    struct Proposal {
        string description;
        uint yesVotes;
        uint noVotes;
        bool executed;
        mapping(address => bool) voters;
    }

    Proposal[] public proposals;

    // Create Proposal
    function createProposal(string memory _description) public {
        Proposal storage newProposal = proposals.push();
        newProposal.description = _description;
        newProposal.yesVotes = 0;
        newProposal.noVotes = 0;
        newProposal.executed = false;
    }

    // Vote Function
    function vote(uint _proposalId, bool _voteYes) public {
        Proposal storage p = proposals[_proposalId];

        require(!p.voters[msg.sender], "Already voted");

        if (_voteYes) {
            p.yesVotes++;
        } else {
            p.noVotes++;
        }

        p.voters[msg.sender] = true;
    }

    // Execute Proposal
    function executeProposal(uint _proposalId) public {
        Proposal storage p = proposals[_proposalId];

        require(!p.executed, "Already executed");
        require(p.yesVotes > p.noVotes, "Not enough yes votes");

        p.executed = true;
    }

    // View Proposal
    function getProposal(uint _id) public view returns (
        string memory, uint, uint, bool
    ) {
        Proposal storage p = proposals[_id];
        return (p.description, p.yesVotes, p.noVotes, p.executed);
    }

    function totalProposals() public view returns (uint) {
        return proposals.length;
    }
}