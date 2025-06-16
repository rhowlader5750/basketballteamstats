package com.pl.basketball_league.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "basketball_stats")
public class Player {
    @Id
    @Column(name ="player_name", unique = true)
    private String name;
    private Double rk;
    private String position;
    private Double age;
    private Integer games_played;
    private Integer games_started;
    private Double minutes_played;
    private Double field_goal;
    private Double field_goal_attempts;
    private Double field_goal_percent;
    private Double three_point_goal;
    private Double three_point_attempt;
    private Double three_point_percent;
    private Double two_point_goal;
    private Double two_point_attempt;
    private Double two_point_percent;
    private Double effective_goal_percent;
    private Double free_throw;
    private Double free_throw_attempt;
    private Double free_throw_percent;
    private Double offensive_rebound;
    private Double defensive_rebound;
    private Double total_rebound;
    private Double assists;
    private Double steals;
    private Double blocks;
    private Double turnovers;
    private Double personal_fouls;
    private Double points;
    private String awards;
    private String team;

    public Player() {
    }

    public Player(String name, Double rk, String position, Double age, Integer games_played, Integer games_started, Double minutes_played, Double field_goal, Double field_goal_attempts, Double field_goal_percent, Double three_point_goal, Double three_point_attempt, Double three_point_percent, Double two_point_goal, Double two_point_attempt, Double two_point_percent, Double effective_goal_percent, Double free_throw, Double free_throw_attempt, Double free_throw_percent, Double offensive_rebound, Double defensive_rebound, Double total_rebound, Double assists, Double steals, Double blocks, Double turnovers, Double personal_fouls, Double points, String awards, String team) {
        this.name = name;
        this.rk = rk;
        this.position = position;
        this.age = age;
        this.games_played = games_played;
        this.games_started = games_started;
        this.minutes_played = minutes_played;
        this.field_goal = field_goal;
        this.field_goal_attempts = field_goal_attempts;
        this.field_goal_percent = field_goal_percent;
        this.three_point_goal = three_point_goal;
        this.three_point_attempt = three_point_attempt;
        this.three_point_percent = three_point_percent;
        this.two_point_goal = two_point_goal;
        this.two_point_attempt = two_point_attempt;
        this.two_point_percent = two_point_percent;
        this.effective_goal_percent = effective_goal_percent;
        this.free_throw = free_throw;
        this.free_throw_attempt = free_throw_attempt;
        this.free_throw_percent = free_throw_percent;
        this.offensive_rebound = offensive_rebound;
        this.defensive_rebound = defensive_rebound;
        this.total_rebound = total_rebound;
        this.assists = assists;
        this.steals = steals;
        this.blocks = blocks;
        this.turnovers = turnovers;
        this.personal_fouls = personal_fouls;
        this.points = points;
        this.awards = awards;
        this.team = team;
    }

    public Player(String name) {
        this.name = name;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getAwards() {
        return awards;
    }

    public void setAwards(String awards) {
        this.awards = awards;
    }

    public Double getPoints() {
        return points;
    }

    public void setPoints(Double points) {
        this.points = points;
    }

    public Double getPersonal_fouls() {
        return personal_fouls;
    }

    public void setPersonal_fouls(Double personal_fouls) {
        this.personal_fouls = personal_fouls;
    }

    public Double getTurnovers() {
        return turnovers;
    }

    public void setTurnovers(Double turnovers) {
        this.turnovers = turnovers;
    }

    public Double getBlocks() {
        return blocks;
    }

    public void setBlocks(Double blocks) {
        this.blocks = blocks;
    }

    public Double getSteals() {
        return steals;
    }

    public void setSteals(Double steals) {
        this.steals = steals;
    }

    public Double getAssists() {
        return assists;
    }

    public void setAssists(Double assists) {
        this.assists = assists;
    }

    public Double getTotal_rebound() {
        return total_rebound;
    }

    public void setTotal_rebound(Double total_rebound) {
        this.total_rebound = total_rebound;
    }

    public Double getDefensive_rebound() {
        return defensive_rebound;
    }

    public void setDefensive_rebound(Double defensive_rebound) {
        this.defensive_rebound = defensive_rebound;
    }

    public Double getOffensive_rebound() {
        return offensive_rebound;
    }

    public void setOffensive_rebound(Double offensive_rebound) {
        this.offensive_rebound = offensive_rebound;
    }

    public Double getFree_throw_percent() {
        return free_throw_percent;
    }

    public void setFree_throw_percent(Double free_throw_percent) {
        this.free_throw_percent = free_throw_percent;
    }

    public Double getFree_throw_attempt() {
        return free_throw_attempt;
    }

    public void setFree_throw_attempt(Double free_throw_attempt) {
        this.free_throw_attempt = free_throw_attempt;
    }

    public Double getFree_throw() {
        return free_throw;
    }

    public void setFree_throw(Double free_throw) {
        this.free_throw = free_throw;
    }

    public Double getEffective_goal_percent() {
        return effective_goal_percent;
    }

    public void setEffective_goal_percent(Double effective_goal_percent) {
        this.effective_goal_percent = effective_goal_percent;
    }

    public Double getTwo_point_percent() {
        return two_point_percent;
    }

    public void setTwo_point_percent(Double two_point_percent) {
        this.two_point_percent = two_point_percent;
    }

    public Double getTwo_point_attempt() {
        return two_point_attempt;
    }

    public void setTwo_point_attempt(Double two_point_attempt) {
        this.two_point_attempt = two_point_attempt;
    }

    public Double getTwo_point_goal() {
        return two_point_goal;
    }

    public void setTwo_point_goal(Double two_point_goal) {
        this.two_point_goal = two_point_goal;
    }

    public Double getThree_point_percent() {
        return three_point_percent;
    }

    public void setThree_point_percent(Double three_point_percent) {
        this.three_point_percent = three_point_percent;
    }

    public Double getThree_point_attempt() {
        return three_point_attempt;
    }

    public void setThree_point_attempt(Double three_point_attempt) {
        this.three_point_attempt = three_point_attempt;
    }

    public Double getThree_point_goal() {
        return three_point_goal;
    }

    public void setThree_point_goal(Double three_point_goal) {
        this.three_point_goal = three_point_goal;
    }

    public Double getField_goal_percent() {
        return field_goal_percent;
    }

    public void setField_goal_percent(Double field_goal_percent) {
        this.field_goal_percent = field_goal_percent;
    }

    public Double getField_goal_attempts() {
        return field_goal_attempts;
    }

    public void setField_goal_attempts(Double field_goal_attempts) {
        this.field_goal_attempts = field_goal_attempts;
    }

    public Double getField_goal() {
        return field_goal;
    }

    public void setField_goal(Double field_goal) {
        this.field_goal = field_goal;
    }

    public Double getMinutes_played() {
        return minutes_played;
    }

    public void setMinutes_played(Double minutes_played) {
        this.minutes_played = minutes_played;
    }

    public Integer getGames_started() {
        return games_started;
    }

    public void setGames_started(Integer games_started) {
        this.games_started = games_started;
    }

    public Integer getGames_played() {
        return games_played;
    }

    public void setGames_played(Integer games_played) {
        this.games_played = games_played;
    }

    public Double getAge() {
        return age;
    }

    public void setAge(Double age) {
        this.age = age;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Double getRk() {
        return rk;
    }

    public void setRk(Double rk) {
        this.rk = rk;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

