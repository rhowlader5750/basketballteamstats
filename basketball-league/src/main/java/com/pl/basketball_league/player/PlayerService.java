package com.pl.basketball_league.player;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {

    private final PlayerRepo playerRepo;
    @Autowired
    public PlayerService(PlayerRepo playerRepo){
        this.playerRepo = playerRepo;
    }

    public List<Player> getPlayers(){
        return playerRepo.findAll();
    }

    public List<Player> getPLayersfromTeam(String teamName){
        return playerRepo.findAll().stream()
                .filter(player -> teamName.equals(player.getTeam()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayByName(String searchText){
        return playerRepo.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());

    }

    public List<Player> getPlayerByPosition(String posName){
        return playerRepo.findAll().stream()
                .filter(player -> player.getPosition().toLowerCase().contains(posName.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByTeamAndPos(String team, String pos){
        return playerRepo.findAll().stream()
                .filter(player -> team.equals(player.getTeam()) && pos.equals(player.getPosition()))
                .collect(Collectors.toList());

    }

    public Player addPlayer(Player player){
        playerRepo.save(player);
        return player;
    }

    public Player updatePlayer(Player updatedPlayer){
        Optional<Player> existingPlayer = playerRepo.findByName(updatedPlayer.getName());
        if(existingPlayer.isPresent()){
            Player playertoUpdate = existingPlayer.get();
            playertoUpdate.setName(updatedPlayer.getName());
            playertoUpdate.setTeam(updatedPlayer.getTeam());
            playertoUpdate.setPosition(updatedPlayer.getPosition());

            playerRepo.save(playertoUpdate);
            return playertoUpdate;
        }
        return null;

    }

    @Transactional
    public void deletePlayer(String playerName){
        playerRepo.deleteByName(playerName);
    }
}
